import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StartButton } from 'app/components/buttons';
import { RadioGroup } from 'app/components/RadioGroup';
import { Column } from '../layout/Column';

export const ConfigBoard: FC = () => {
  const history = useHistory();
  const [selectedLevel, setSelectedLevel] = useState('hard');
  const [skipLevel, setSkipLevel] = useState(4);
  const [l1Level, setL1Level] = useState(20);
  const [l2Level, setL2Level] = useState(30);

  const tags = ['anal', 'oral', 'sex'];

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

  const getLevels = () => {
    if (levelLimitsDefault[selectedLevel]) {
      return levelLimitsDefault[selectedLevel];
    }
    return {
      1: l1Level,
      2: l2Level,
    };
  };

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
          <div className="column">
            <span>
              <label htmlFor="skipCount">Pominięć: </label>
              <input
                id="skipCount"
                type="number"
                value={skipLevel}
                onChange={(e) => setSkipLevel(+e.target.value)}
              />
            </span>
            <span>
              <label htmlFor="l1Limit">Ruchów L1: </label>
              <input
                id="l1Limit"
                type="number"
                value={l1Level}
                onChange={(e) => setL1Level(+e.target.value)}
              />
            </span>
            <span>
              <label htmlFor="l2Limit">Ruchów L2: </label>
              <input
                id="l2Limit"
                type="number"
                value={l2Level}
                onChange={(e) => setL2Level(+e.target.value)}
              />
            </span>
          </div>
        )}

        <div>
          {tags.map((t) => (
            <>
              <label htmlFor={t}>{t}</label>
              <input id={t} type="checkbox" checked={true} />
            </>
          ))}
        </div>
        <StartButton start={() => play()}></StartButton>
      </Column>
    </>
  );
};
