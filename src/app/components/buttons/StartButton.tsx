import React, { FC } from 'react';
import { Button } from 'app/components/buttons/Button';

interface StartButtonProps {
  start(): void;
}

export const StartButton: FC<StartButtonProps> = ({ start }) => {
  return (
    <Button
      className="action-button"
      text="Start"
      clickHandler={() => start()}
    ></Button>
  );
};
