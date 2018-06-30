const TYPES = {
  NEW_ANECDOTE: 'new_anecdote',
  VOTE: 'vote',
  DELETE: 'delete'
};

const anecdoteActions = {
  create(content) {
    return {
      type: TYPES.NEW_ANECDOTE,
      data: { content }
    };
  },
  vote(id) {
    return {
      type: 'VOTE',
      data: { id }
    };
  },
  delete(id) {
    return {
      type: TYPES.DELETE,
      data: { id }
    };
  }
};

export { anecdoteActions, TYPES };
