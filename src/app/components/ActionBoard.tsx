import React, { FC, useState } from 'react';
import { Task } from 'app/model/task';
import { InfoBoard } from 'app/components/InfoBoard';
import { TaskInfoBoard } from 'app/components/TaskInfoBoard';
import { toss } from 'app/services/tasks';
import { toast } from 'react-toastify';
import { ResetButton } from 'app/components/ResetButton';
import { Row } from 'app/components/Row';
import { TossButton } from 'app/components/TossButton';
import { SkipButton } from 'app/components/SkipButton';

const skipLimit = 3;

export const ActionBoard: FC = () => {
  const [counter, setCounter] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [level, setLevel] = useState(1);
  const [task, setTask] = useState(undefined as unknown as Task);
  const [startTime, setStartTime] = useState(new Date().getTime());

  const reset = () => {
    setTask(undefined as unknown as Task);
    setCounter(0);
    setLevel(1);
    setSkipCount(0);
    setStartTime(new Date().getTime());
  };

  const tossATask = () => {
    setTask(toss(level));
    setCounter(counter + 1);
    if (counter > 0 && counter % 30 === 0) {
      setLevel(level + 1);
      setSkipCount(0);
    }
  };

  const skipTask = () => {
    setTask(toss(level));
    setSkipCount(skipCount + 1);
    if (skipCount === skipLimit - 1) {
      toast('Koniec pomijania!');
    }
  };

  return (
    <>
      <Row>
        <TaskInfoBoard task={task}></TaskInfoBoard>
      </Row>
      <Row>
        <TossButton toss={() => tossATask()} />
        <SkipButton skip={() => skipTask()} disabled={skipCount >= skipLimit} />
      </Row>
      <Row>
        <InfoBoard counter={counter} level={level} startTime={startTime} />
      </Row>
      <Row>
        <ResetButton reset={() => reset()} />
      </Row>
    </>
  );
};
