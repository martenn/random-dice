import React from 'react';
import './App.css';
import { Button } from './Button';

function App() {
  let counter = 0;
  let level = 1;
  let actions = ["liżesz", "gryziesz", "masujesz", "ssiesz", "ssiesz mocno", "klepiesz", "wkładasz"];
  let parts = ["ręce", "stopy", "ramiona", "palce", "pośladki", "włosy", "nos", "policzki", "język", "dziurka/penis/jajka", "dupka"];
  let action = '';
  let part = '';

  const reset = () => {
    counter = 0;
    level = 1;
  }

  const randomAction = () => {
    const actionLength = actions.length;
    const random = Math.random();
    const index = Math.floor(random * actionLength);
    action = actions[index];
  }

  const randomPart = () => {
    const partLength = parts.length;
    const random = Math.random();
    const index = Math.floor(random * partLength);
    part = parts[index];
  }

  const toss = () => {
    console.log("toss");
    randomAction();
    randomPart();
    console.log(level);
    level++;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-row">
          <div className="placeholder">{action}</div>
          <div className="placeholder">{part}</div>
        </div>

        <div className="App-header-row">
          <Button
            className="she"
            text="Losuj"
            clickHandler={() => toss()}>
          </Button>
        </div>
        <div className="App-header-row info-box">
          Poziom: {level}
        </div>
        <div className="App-header-row info-box">
          Zabaw: {counter}
        </div>
        <Button
          text="Reset"
          clickHandler={() => reset()}>
        </Button>
      </header>
    </div>
  );
}

export default App;
