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
import { Stats } from 'app/model/stats';

const skipLimit = 3;

const emptyStats = (): Stats => ({
  levelTaskCounts: {
    1: 0,
    2: 0,
    3: 0,
  },
  skipCount: 0,
  counter: 0,
  level: 1,
  startTime: new Date().getTime(),
});

export const ActionBoard: FC = () => {
  const [task, setTask] = useState(undefined as unknown as Task);
  const [stats, setStats] = useState(emptyStats);

  const reset = () => {
    setTask(undefined as unknown as Task);
    setStats(emptyStats);
  };

  const tossATask = () => {
    const newTask = toss(stats.level);
    setTask(newTask);
    let newStats = {
      ...stats,
      counter: stats.counter + 1,
      levelTaskCounts: {
        ...stats.levelTaskCounts,
        [newTask.level]: stats.levelTaskCounts[newTask.level] + 1,
      },
    };

    if (stats.counter > 0 && stats.counter % 30 === 0) {
      newStats = { ...newStats, level: stats.level + 1, skipCount: 0 };
    }

    setStats(newStats);
  };

  const skipTask = () => {
    const newTask = toss(stats.level);
    setTask(newTask);
    const newStats = {
      ...stats,
      skipCount: stats.skipCount + 1,
    };
    if (newStats.skipCount === skipLimit) {
      toast('Koniec pomijania!');
    }
    setStats(newStats);
  };

  return (
    <>
      <Row>
        <TaskInfoBoard task={task}></TaskInfoBoard>
      </Row>
      <Row>
        <TossButton toss={() => tossATask()} />
        <SkipButton
          skip={() => skipTask()}
          disabled={stats.skipCount >= skipLimit}
        />
      </Row>
      <Row>
        <InfoBoard stats={stats} />
      </Row>
      <Row>
        <ResetButton reset={() => reset()} />
      </Row>
    </>
  );
};
