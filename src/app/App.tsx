import React, { useState } from 'react';
import '@core/App.css';
import { Button } from '@core/components/Button';
import { TaskBoard } from '@core/components/TaskBoard';
import { Task } from '@core/model/task';
import { toss } from '@core/services/tasks'
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";

const skipLimit = 3;

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  let [counter, setCounter] = useState(0);
  let [skipCount, setSkipCount] = useState(0);
  let [level, setLevel] = useState(1);
  let [task, setTask] = useState(undefined as unknown as Task);

  const reset = () => {
    setTask(undefined as unknown as Task);
    setCounter(0);
    setLevel(1);
    setSkipCount(0);
  }

  const tossATask = () => {
    setTask(toss(level));
    setCounter(counter + 1);
    if (counter > 0 && counter % 30 === 0) {
      setLevel(level + 1);
      setSkipCount(0);
    }
  }

  const skipTask = () => {
    setTask(toss(level));
    console.log(skipCount);
    setSkipCount(skipCount + 1);
    console.log(skipCount);
    console.log('toast!')
    if (skipCount === skipLimit - 1) {
      toast("Koniec pomijania!");
    }
  }

  return (
    <div>
      <TaskBoard task={task}></TaskBoard>
      <div className="row">
        <Button
          className="action-button"
          text="Losuj"
          clickHandler={() => tossATask()}>
        </Button>
        <Button
          text="Pomiń"
          className="action-button"
          disabled={skipCount >= skipLimit}
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
          className="action-button"
          text="Reset"
          clickHandler={() => reset()}>
        </Button>
      </div>
      <ToastContainer hideProgressBar={false} />
    </div>
  );
}

export default App;
