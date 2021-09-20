import { FC } from 'react';
import { Button } from 'app/components/Button';

interface ResetButtonProps {
  reset(): void;
}

export const ResetButton: FC<ResetButtonProps> = ({
  reset
}) => {
  return (
    <Button
      className="action-button"
      text="Reset"
      clickHandler={() => reset()}>
    </Button>
  );
}
