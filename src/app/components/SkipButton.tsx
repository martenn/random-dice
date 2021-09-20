import { FC } from 'react';
import { Button } from './Button';

interface SkipButtonProps {
  skip(): void;
  disabled: boolean;
}

export const SkipButton: FC<SkipButtonProps> = ({
  skip,
  disabled
}) => {
  return (
    <Button
      text="Pomiń"
      className="action-button"
      disabled={disabled}
      clickHandler={() => skip()} />
  )
}