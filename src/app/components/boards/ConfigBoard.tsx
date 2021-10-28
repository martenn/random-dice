import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StartButton } from 'app/components/buttons';
import { RadioGroup } from 'app/components/radio/RadioGroup';
import { Column } from 'app/components/layout';
import { LabeledInput } from 'app/components/input/LabeledInput';
import { uniqueTags } from 'app/data/tasks';
import { CheckboxGroup } from 'app/components/checkbox';

const defaultSelectedTags: Map<string, boolean> = new Map();
uniqueTags().forEach((task) => defaultSelectedTags.set(task, true));

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
    2: 90,
  },
  medium: {
    1: 20,
    2: 50,
  },
  hard: {
    1: 10,
    2: 30,
  },
};

const getSelectedTags = (tags: Map<string, boolean>) =>
  Array.from(tags.entries())
    .filter((e) => e[1])
    .map((e) => e[0]);

export const ConfigBoard: FC = () => {
  const history = useHistory();
  const [selectedLevel, setSelectedLevel] = useState('hard');
  const [skipLevel, setSkipLevel] = useState(4);
  const [l1Level, setL1Level] = useState(20);
  const [l2Level, setL2Level] = useState(30);
  const [selectedTags, setSelectedTags] = useState(defaultSelectedTags);

  const catchSelectedLevel = (level: string) => {
    setSelectedLevel(level);
    if (levelLimitsDefault[level]) {
      setL1Level(levelLimitsDefault[level][1]);
      setL2Level(levelLimitsDefault[level][2]);
    }
  };

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
      tags: getSelectedTags(selectedTags),
      levelLimit: getLevels(),
    });
  };

  return (
    <>
      <Column>
        <RadioGroup
          radios={levels}
          selectedValue={selectedLevel}
          selectRadio={catchSelectedLevel}
        />

        <Column>
          <LabeledInput
            id="skip"
            label="Pominięć:"
            value={skipLevel}
            setValue={setSkipLevel}
            disabled={selectedLevel !== 'custom'}
          />
          <LabeledInput
            id="l1Limit"
            label="Ruchów L1:"
            value={l1Level}
            setValue={setL1Level}
            disabled={selectedLevel !== 'custom'}
          />
          <LabeledInput
            id="l2Limit"
            label="Ruchów L1+L2:"
            value={l2Level}
            setValue={setL2Level}
            disabled={selectedLevel !== 'custom'}
          />
        </Column>

        <CheckboxGroup boxes={selectedTags} setValue={setSelectedTags} />
        <StartButton start={() => play()}></StartButton>
      </Column>
    </>
  );
};
