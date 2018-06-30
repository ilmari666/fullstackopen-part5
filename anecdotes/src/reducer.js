import { generateId } from './utils';
import { TYPES } from './actions';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const asObject = anecdote => {
  return {
    content: anecdote,
    id: generateId(),
    votes: 0
  };
};

const sortByVotes = function(a, b) {
  return a.votes < b.votes;
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type.toLowerCase()) {
    case TYPES.NEW_ANECDOTE:
      return [...state, asObject(data.content)];
    case TYPES.DELETE:
      return state.filter(anecdote => anecdote.id !== data.id);
    case TYPES.VOTE:
      const anecdote = state.find(a => a.id === data.id);
      const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      const updatedAnecdotes = state.map(
        a => (a.id !== data.id ? a : votedAnecdote)
      );
      return updatedAnecdotes.sort(sortByVotes);

    default:
  }

  return state;
};

export default reducer;
