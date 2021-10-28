import React, { ChangeEvent, FC } from 'react';

interface RadioGroupProps {
  selectedValue: string;
  radios: {
    label: string;
    value: string;
  }[];
  selectRadio(selected: string): void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  selectedValue,
  radios,
  selectRadio,
}) => {
  const catchState = (e: ChangeEvent<HTMLInputElement>) => {
    selectRadio(e?.target?.value);
  };

  return (
    <div className="row wrap">
      {radios.map((r) => (
        <span key={r.value} className="clickable-item">
          <label htmlFor={r.value}>{r.label}</label>
          <input
            id={r.value}
            type="radio"
            value={r.value}
            checked={selectedValue === r.value}
            onChange={catchState}
          />
        </span>
      ))}
    </div>
  );
};
