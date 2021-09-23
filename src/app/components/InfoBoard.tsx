import React, { FC } from 'react';
import { Stats } from 'app/model/stats';
import { Timer } from 'app/components/Timer';

interface InfoBoardProps {
  stats: Stats;
}

export const InfoBoard: FC<InfoBoardProps> = ({ stats }) => {
  return (
    <div className={`info-box level${stats.level}`}>
      <div className="column">
        <span className="info">Zabaw: {stats.counter}</span>
        <span className="info">Pominiętych: {stats.skipCount}</span>
        <Timer startTime={stats.startTime} />
      </div>
      <div className="column">
        <span className="info">Zabaw/1: {stats.levelTaskCounts[1]}</span>
        <span className="info">Zabaw/2: {stats.levelTaskCounts[2]}</span>
        <span className="info">Zabaw/3: {stats.levelTaskCounts[3]}</span>
      </div>
    </div>
  );
};
