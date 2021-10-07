import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StartButton } from 'app/components/buttons';
import { RadioGroup } from 'app/components/radio/RadioGroup';
import { Column } from 'app/components/layout';
import { LabeledInput } from 'app/components/input/LabeledInput';
import { tags } from 'app/data/tasks';
import { CheckboxGroup } from 'app/components/checkbox';

const defaultSelectedTags: Map<string, boolean> = new Map();

tags().forEach((task) => defaultSelectedTags.set(task, true));

const levels = [
  {
    label: 'Soft',
    value: 'soft',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'Hard',
    value: 'hard',
  },
  {
    label: 'Custom',
    value: 'custom',
  },
];

const levelLimitsDefault: { [key: string]: { [key: number]: number } } = {
  soft: {
    1: 40,
    2: 50,
  },
  medium: {
    1: 20,
    2: 30,
  },
  hard: {
    1: 10,
    2: 20,
  },
};

export const ConfigBoard: FC = () => {
  const history = useHistory();
  const [selectedLevel, setSelectedLevel] = useState('hard');
  const [skipLevel, setSkipLevel] = useState(4);
  const [l1Level, setL1Level] = useState(20);
  const [l2Level, setL2Level] = useState(30);
  const [selectedTags, setSelectedTags] = useState(defaultSelectedTags);

  const getLevels = () => {
    if (levelLimitsDefault[selectedLevel]) {
      return levelLimitsDefault[selectedLevel];
    }
    return {
      1: l1Level,
      2: l2Level,
    };
  };

  const play = () => {
    const path = `/play`;
    history.push(path, {
      skipLimit: skipLevel,
      tags: tags,
      levelLimit: getLevels(),
    });
  };

  return (
    <>
      <Column>
        <RadioGroup
          radios={levels}
          selectedValue={selectedLevel}
          selectRadio={setSelectedLevel}
        />

        {selectedLevel === 'custom' && (
          <Column>
            <LabeledInput
              id="skip"
              label="Pominięć:"
              value={skipLevel}
              setValue={setSkipLevel}
            />
            <LabeledInput
              id="l1Limit"
              label="Ruchów L1:"
              value={l1Level}
              setValue={setL1Level}
            />
            <LabeledInput
              id="l2Limit"
              label="Ruchów L2:"
              value={l2Level}
              setValue={setL2Level}
            />
          </Column>
        )}

        <CheckboxGroup boxes={selectedTags} setValue={setSelectedTags} />
        <StartButton start={() => play()}></StartButton>
      </Column>
    </>
  );
};
