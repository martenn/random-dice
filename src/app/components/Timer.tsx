import { FC, useEffect, useState } from 'react'

interface TimerProps {
  startTime: number;
}

const getElapsedTime = (start: number, now: number): string => {
  const diffInSeconds = Math.max(0, Math.floor((now - start) / 1000));
  const hours = Math.floor(diffInSeconds / 60 / 60);
  const minutes = Math.floor((diffInSeconds - hours * 60 * 60) / 60);
  const seconds = Math.floor((diffInSeconds - hours * 60 * 60 - minutes * 60));
  return (hours + '').padStart(2, '0') + ':' + (minutes + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, '0');
}

export const Timer: FC<TimerProps> = ({
  startTime
}) => {
  let [time, setTime] = useState(new Date().getTime());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().getTime());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <span className="info">
      {getElapsedTime(startTime, time)}
    </span>
  )
}