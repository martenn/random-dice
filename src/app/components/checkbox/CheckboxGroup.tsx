import React, { FC } from 'react';
import { Checkbox } from 'app/components/checkbox/';

interface CheckboxGroupProps {
  boxes: Map<string, boolean>;
  setValue(boxes: Map<string, boolean>): void;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ boxes, setValue }) => {
  const catchValue = (name: string, selected: boolean) => {
    const newSelected = new Map(boxes);
    newSelected.set(name, selected);
    setValue(newSelected);
  };

  return (
    <div>
      {Array.from(boxes.keys()).map((t) => (
        <Checkbox
          key={t}
          label={t}
          name={t}
          checked={boxes.get(t)}
          setValue={(value) => catchValue(t, value)}
        />
      ))}
    </div>
  );
};
