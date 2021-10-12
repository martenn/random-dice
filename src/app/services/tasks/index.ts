import { Task } from 'app/model/task';
import { tasks } from 'app/data/tasks';

const weightLevels = [
  1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4,
];

const filterByLevel = (level: number): Task[] => {
  return tasks.filter((t) => t.level === level);
};

const filter = (level: number, tags: string[]): Task[] => {
  return filterByLevel(level).filter(
    (t) =>
      t.tags.length === 0 || t.tags.some((tag) => tags.indexOf(tag) !== -1),
  );
};

const tossLevel = (level: number): number => {
  let levelSum = 0;
  for (let i = level; i >= 0; i--) {
    levelSum += i * i;
  }
  const index = Math.floor(Math.random() * levelSum);
  return weightLevels[index];
};

const tossByLevel = (level: number, tags: string[]): Task => {
  const filteredTasks = filter(level, tags);
  const index = Math.floor(Math.random() * filteredTasks.length);
  return filteredTasks[index];
};

export const toss = (level: number, tags: string[]): Task => {
  const newLevel = tossLevel(level);
  const task = tossByLevel(newLevel, tags);
  return task;
};
