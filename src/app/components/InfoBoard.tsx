import React, { FC } from 'react'

interface InfoBoardProps {
  level: number;
  counter: number;
}

export const InfoBoard: FC<InfoBoardProps> = ({
  level,
  counter
}) => {
  return (
    <div className={`info-box level${level}`}>
      <span className="info">Zabaw: {counter}</span>
    </div>
  )
}
