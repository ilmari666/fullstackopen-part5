import React from 'react';
import { anecdoteActions } from './actions';

const AnecdoteForm = props => {
  const { store } = props;
  return (
    <React.Fragment>
      <h2>create new</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          const content = e.target.content.value;
          if (content === '') {
            return;
          }
          store.dispatch(anecdoteActions.create(content));
          e.target.content.value = '';
        }}
      >
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </React.Fragment>
  );
};

export default AnecdoteForm;
