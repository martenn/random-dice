import React, { ChangeEvent, FC, useState } from 'react';

export const RadioGroup: FC = () => {
  const [radioState, setRadioState] = useState('radio1');
  const catchState = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioState(e?.target?.value);
  };

  return (
    <div className="column">
      <span>
        <label htmlFor="radio1">Level 1</label>
        <input
          id="radio1"
          type="radio"
          value="radio1"
          checked={radioState === 'radio1'}
          onChange={catchState}
        />
      </span>
      <span>
        <label htmlFor="radio2">Level 2</label>
        <input
          id="radio2"
          type="radio"
          value="radio2"
          checked={radioState === 'radio2'}
          onChange={catchState}
        />
      </span>
      <span>
        <label htmlFor="radio3">Level 3</label>
        <input
          id="radio3"
          type="radio"
          value="radio3"
          checked={radioState === 'radio3'}
          onChange={catchState}
        />
      </span>
    </div>
  );
};
