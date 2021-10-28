import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  setValue(value: boolean): void;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  name,
  checked,
  setValue,
}) => {
  const catchCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return (
    <span className="clickable-item">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="checkbox"
        onChange={catchCheckboxValue}
        checked={checked}
      />
    </span>
  );
};
