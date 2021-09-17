import { Task } from '../../model/task'
import { tasks } from '../../data/tasks'

const weightLevels = [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

export const toss = (level: number): Task => {
  const newLevel = tossLevel(level);
  console.log("Got level: ", newLevel);
  const task = tossByLevel(newLevel);
  return task;
}

const tossLevel = (level: number): number => {
  let levelSum = 0;
  for (let i = level; i >= 0; i--) {
    levelSum += i * i;
  }
  const index = Math.floor(Math.random() * levelSum);
  return weightLevels[index];
}

const tossByLevel = (level: number): Task => {
  const filteredTasks = filter(level);
  const index = Math.floor(Math.random() * filteredTasks.length);
  console.log('Got: ' + index)
  return filteredTasks[index];
}

const filter = (level: number): Task[] => {
  return tasks.filter(t => t.level === level);
}

