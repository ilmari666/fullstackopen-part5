import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import Statistiikka from './Statistiikka';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
    this.state = this.store.getState();
  }
  click = type => () => {
    this.store.dispatch({ type });
  };

  updateState = () => this.setState(this.store.getState());
  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.click('GOOD')}>hyvä</button>
        <button onClick={this.click('NEUTRAL')}>neutraali</button>
        <button onClick={this.click('BAD')}>huono</button>
        <Statistiikka store={this.store} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
