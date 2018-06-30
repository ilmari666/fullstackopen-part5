import React from 'react';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';

class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <AnecdoteList store={store} />
        <AnecdoteForm store={store} />
      </div>
    );
  }
}

export default App;
