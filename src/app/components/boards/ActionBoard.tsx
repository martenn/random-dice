import React, { FC, useState } from 'react';
import { Task } from 'app/model/task';
import { toss } from 'app/services/tasks';
import { toast } from 'react-toastify';
import { Row } from 'app/components/layout/Row';
import { Stats } from 'app/model/stats';
import { InfoBoard, TaskInfoBoard } from 'app/components/boards';
import { ResetButton, SkipButton, TossButton } from 'app/components/buttons';
import { useLocation } from 'react-router';

export interface ActionConfig {
  skipLimit: number;
  tags: string[];
  levelLimit: { [key: number]: number };
}

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
  const { state } = useLocation<ActionConfig>();
  const skipLimit = state.skipLimit || 4;
  const levelLimit = state.levelLimit || {
    1: 30,
    2: 30,
  };

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

    if (
      stats.counter > 0 &&
      stats.counter % (levelLimit ? levelLimit[stats.level] : 1) === 0
    ) {
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
