import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { toss } from './services/tasks'

function App() {
  let [counter, setCounter] = useState(0);
  let [level, setLevel] = useState(1);
  let actions = ["liżesz", "gryziesz", "masujesz", "ssiesz", "ssiesz mocno", "klepiesz", "penetrujesz"];
  let parts = ["ręce", "stopy", "ramiona", "palce", "pośladki", "włosy", "nos", "policzki", "język", "dziurka/penis", "dupka", "piersi", "sutki", "brodawki", "łechtaczka/jajka", "paszki"];
  let [action, setAction] = useState('');
  let [part, setPart] = useState('');

  const reset = () => {
    setCounter(0);
    setLevel(1);
  }

  const tossATask = () => {
    console.log("tossATask");
    const task = toss(level);
    setAction(task.action);
    setPart(task.part ?? '');

    setCounter(counter + 1);
    if (counter > 0 && counter % 10 === 0) {
      setLevel(level + 1);
    }
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
            clickHandler={() => tossATask()}>
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
