import { Task } from 'app/model/task';
import { tasks } from 'app/data/tasks';

const weightLevels = [
  1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4,
];

const filter = (level: number): Task[] => {
  return tasks.filter((t) => t.level === level);
};

const tossLevel = (level: number): number => {
  let levelSum = 0;
  for (let i = level; i >= 0; i--) {
    levelSum += i * i;
  }
  const index = Math.floor(Math.random() * levelSum);
  return weightLevels[index];
};

const tossByLevel = (level: number): Task => {
  const filteredTasks = filter(level);
  const index = Math.floor(Math.random() * filteredTasks.length);
  return filteredTasks[index];
};

export const toss = (level: number): Task => {
  const newLevel = tossLevel(level);
  const task = tossByLevel(newLevel);
  return task;
};
