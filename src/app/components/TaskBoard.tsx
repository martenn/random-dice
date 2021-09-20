import React, { FC } from 'react';
import { Task } from 'app/model/task';

interface TaskBoardProps {
  task?: Task;
}

export const TaskBoard: FC<TaskBoardProps> = ({
  task
}) => {
  return (
    <div className="row">
      {task ? (
        <div className="column">
          <div className="row">
            <div className="task">{task.action}</div>
            {task?.part && <div className="task">{task.part}</div>}
          </div>
        </div>
      ) : (
        <div className="task">Brak zadania</div>
      )
      }
    </div>
  )
}