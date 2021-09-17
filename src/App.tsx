import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { TaskBoard } from './components/TaskBoard';
import { Task } from './model/task';
import { toss } from './services/tasks'

function App() {
  let [counter, setCounter] = useState(0);
  let [level, setLevel] = useState(1);
  let [task, setTask] = useState(undefined as unknown as Task);

  const reset = () => {
    setTask(undefined as unknown as Task);
    setCounter(0);
    setLevel(1);
  }

  const tossATask = () => {
    setTask(toss(level));
    setCounter(counter + 1);
    if (counter > 0 && counter % 30 === 0) {
      setLevel(level + 1);
    }
  }

  const skipTask = () => {
    setTask(toss(level));
  }

  return (
    <div>
      <TaskBoard task={task}></TaskBoard>
      <div className="row">
        <Button
          text="Losuj"
          clickHandler={() => tossATask()}>
        </Button>
        <Button
          text="Pomiń"
          clickHandler={() => skipTask()}>
        </Button>
      </div>
      <div className="row">
        <div className={`info-box level${level}`}>
          <span className="info">Zabaw: {counter}</span>
        </div>
      </div>

      <div className="row">
        <Button
          text="Reset"
          clickHandler={() => reset()}>
        </Button>
      </div>
    </div>
  );
}

export default App;
