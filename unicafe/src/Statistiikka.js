import React from 'react';

class Statistiikka extends React.Component {
  constructor(props) {
    super(props);
    const { store } = props;
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
    this.store = store;
  }
  render() {
    const { good, neutral, bad, total } = this.state;

    if (total === 0) {
      return (
        <div>
          <h2>statistiikka</h2>
          <div>ei yhtään palautetta annettu</div>
        </div>
      );
    }

    return (
      <div>
        <h2>statistiikka</h2>
        <table>
          <tbody>
            <tr>
              <td>hyvä</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutraali</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>huono</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>keskiarvo</td>
              <td> {((good - bad) / total).toFixed(2)}</td>
            </tr>
            <tr>
              <td>positiivisia</td>
              <td> {((good / total) * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>

        <button onClick={() => this.store.dispatch({ type: 'ZERO' })}>
          nollaa tilasto
        </button>
      </div>
    );
  }
}

export default Statistiikka;
