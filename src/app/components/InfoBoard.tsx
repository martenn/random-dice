import { FC } from 'react'
import { Timer } from './Timer'

interface InfoBoardProps {
  level: number;
  counter: number;
  startTime: number;
}

export const InfoBoard: FC<InfoBoardProps> = ({
  level,
  counter,
  startTime
}) => {
  return (
    <div className={`info-box level${level}`}>
      <span className="info">Zabaw: {counter}</span>
      <Timer startTime={startTime} />
    </div>
  )
}
