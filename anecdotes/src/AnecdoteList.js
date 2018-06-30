import React from 'react';
import Anecdote from './Anecdote';

const AnecdoteList = props => {
  const { store } = props;
  const anecdotes = store.getState();
  return (
    <React.Fragment>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <Anecdote {...anecdote} key={anecdote.id} store={store} />
      ))}
    </React.Fragment>
  );
};

export default AnecdoteList;
