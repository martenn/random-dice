import React, { ChangeEvent, FC } from 'react';

interface LabeledInputProps<T> {
  id: string;
  label: string;
  value: T;
  setValue(value: T): void;
}

export const LabeledInput: FC<LabeledInputProps<number>> = ({
  id,
  label,
  value,
  setValue,
}) => {
  const catchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return (
    <span>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" value={value} onChange={catchValue} />
    </span>
  );
};
