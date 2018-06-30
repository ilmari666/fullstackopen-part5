import React from 'react';
import { anecdoteActions } from './actions';

const Anecdote = ({ id, content, votes, store }) => (
  <div>
    <div>{content}</div>
    <div>
      has {votes}
      <button
        onClick={() => {
          const action = anecdoteActions.vote(id);
          store.dispatch(action);
        }}
      >
        vote
      </button>
    </div>
  </div>
);

export default Anecdote;
