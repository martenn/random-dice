import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler(): void;
  text?: string;
}

export const Button: FC<ButtonProps> = ({
  clickHandler,
  text
}) => {
  return (
    <button onClick={() => clickHandler()}>{text}</button>
  )
}