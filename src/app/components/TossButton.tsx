import React, { FC } from 'react';
import { Button } from 'app/components/Button';

interface TossButtonProps {
  toss(): void;
}

export const TossButton: FC<TossButtonProps> = ({
  toss
}) => {
  return (
    <Button
      className="action-button"
      text="Losuj"
      clickHandler={() => toss()}>
    </Button>
  );
}
