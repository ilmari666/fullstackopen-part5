import React, { Component } from 'react';
import './App.css';


const Button = props => {
  const style = {
    margin: '10px',
  };
  return <button {...props} style={style} />
};

const Options = ['hyvä', 'neutraali', 'huono'];
const Header = ({label}) => <h1>{label}</h1>;
const Choices = ({choices, choose}) => (<div>
  {choices.map(choice=>
    <Button type="button" onClick={()=>choose(choice)} key={choice}>{choice}</Button>)}
  </div>);

const Stats = ({history})=>(<div>{
  Object.keys(history).map(key=><p>{key+" "+history[key]}</p>)
  }</div>);

class App extends Component {
  constructor(){
    super();
    this.state = {
      history: Options.reduce((history, option) => {
        history[option]=0;
        return history;
      }, {})
    };
  }
  onSelect(value) {
    this.setState(({history})=>{
      ++history[value];
      return {history};
    });
  }
  render() {
    const { history} = this.state;
    return (
      <div>
        <Header label="anna palautetta" />
        <Choices choices={Options} choose={(value)=>this.onSelect(value)} />
        <Header label="statistiikka" />
        <Stats history={history} />
      </div>
    );
  }
}

export default App;
