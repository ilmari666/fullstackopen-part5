import React from 'react';
import { object } from 'prop-types';
import { anecdoteActions } from './actions';

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;

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
  }
}

AnecdoteForm.contextTypes = {
  store: object
};

export default AnecdoteForm;
