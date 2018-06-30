import React from 'react';
import Anecdote from './Anecdote';
import { anecdoteActions } from './actions';

class App extends React.Component {
  render() {
    const { store } = this.props;
    const anecdotes = store.getState();
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote => (
          <Anecdote {...anecdote} key={anecdote.id} store={store} />
        ))}
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
      </div>
    );
  }
}

export default App;
