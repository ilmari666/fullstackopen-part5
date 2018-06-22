import React, { Component } from 'react';
import './App.css';

const OPTIONS = {
  Good: 'hyvä',
  Neutral: 'neutraali',
  Bad: 'huono',
};

const Button = (props) => {
  const style = {
    margin: '10px',
  };
  return <button {...props} style={style} />;
};

const Header = ({ label }) => <h1>{label}</h1>;

const Choices = ({ choices, choose }) => (<div>
  {choices.map(choice =>
    <Button type="button" onClick={() => choose(choice)} key={choice}>{OPTIONS[choice]}</Button>)}
</div>);

const getButtonClicks = history =>
  Object.keys(history).map(key => ({
    label: OPTIONS[key],
    value: history[key],
  }));

const getPositiveClickPct = (history, totalClicks) => {
  if (totalClicks === 0) {
    return 0;
  }
  const positiveClicks = history.Good;
  const avgPct = (positiveClicks / totalClicks) * 100;
  return `${avgPct.toFixed(1)}%`;
};


const getClickAvg = (history, totalClicks) => {
  if (totalClicks === 0) {
    return 0;
  }
  const avgPoints = (history.Good - history.Bad) / totalClicks;
  return avgPoints.toFixed(1);
};

const NoFeedbackGiven = () => <p>ei yhtään palautetta annettu</p>;

const Statistic = ({ label, value }) => <p>{ label } { value }</p>;

const Statistics = ({ history, totalClicks }) => (<div>
  { getButtonClicks(history).map(historySet => <Statistic {...historySet} />) }
  <Statistic label="keskiarvo" value={getClickAvg(history, totalClicks)} />
  <Statistic label="positiivisia" value={getPositiveClickPct(history, totalClicks)} />
</div>);

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: Object.keys(OPTIONS).reduce((history, option) => {
        history[option] = 0;
        return history;
      }, {}),
      totalClicks: 0,
    };
  }
  onSelect(value) {
    this.setState(({ history, totalClicks }) => {
      ++history[value];
      ++totalClicks;
      return { history, totalClicks };
    });
  }
  render() {
    const { history, totalClicks } = this.state;
    return (
      <div>
        <Header label="anna palautetta" />
        <Choices choices={Object.keys(OPTIONS)} choose={value => this.onSelect(value)} />
        <Header label="statistiikka" />
    { this.state.totalClicks ? <Statistics history={history} totalClicks={totalClicks} /> : <NoFeedbackGiven /> }
      </div>
    );
  }
}

export default App;
