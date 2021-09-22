import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler(): void;
  text?: string;
}

export const Button: FC<ButtonProps> = ({
  clickHandler,
  text,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};
