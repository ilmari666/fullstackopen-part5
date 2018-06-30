import React from 'react';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';

class App extends React.Component {
  render() {
    return (
      <div>
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    );
  }
}

export default App;
