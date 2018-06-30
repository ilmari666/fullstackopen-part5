import React from 'react';
import { object } from 'prop-types';
import Anecdote from './Anecdote';

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const anecdotes = store.getState();
    return (
      <React.Fragment>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote => (
          <Anecdote {...anecdote} key={anecdote.id} store={store} />
        ))}
      </React.Fragment>
    );
  }
}

AnecdoteList.contextTypes = {
  store: object
};

export default AnecdoteList;
