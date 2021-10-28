import React, { ChangeEvent, FC } from 'react';

interface LabeledInputProps<T> {
  id: string;
  label: string;
  value: T;
  setValue(value: T): void;
  disabled: boolean;
}

export const LabeledInput: FC<LabeledInputProps<number>> = ({
  id,
  label,
  value,
  setValue,
  disabled,
}) => {
  const catchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return (
    <div className="labeled-input row">
      <label className="row-item" htmlFor={id}>
        {label}
      </label>
      <input
        className="row-item"
        id={id}
        type="number"
        value={value}
        onChange={catchValue}
        disabled={disabled}
      />
    </div>
  );
};
