import { Task } from '../../model/task'
import { tasks } from '../../data/tasks'

export const toss = (level: number): Task => {
  const filteredTasks = filter(level);
  const index = Math.floor(Math.random() * filteredTasks.length);
  return filteredTasks[index];
}
const filter = (level: number): Task[] => {
  return tasks.filter(t => t.level === level);
}

