import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StartButton } from 'app/components/buttons';
import { RadioGroup } from 'app/components/RadioGroup';
import { Column } from '../layout/Column';

export const ConfigBoard: FC = () => {
  const history = useHistory();
  const [selectedLevel, setSelectedLevel] = useState('hard');

  const tags = ['anal', 'oral', 'sex'];

  const play = () => {
    const path = `/play`;
    history.push(path, {
      skipLimit: 4,
      tags: tags,
      levelLimit: {
        1: 30,
        2: 30,
      },
    });
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
              <input id="skipCount" type="number" value="4" />
            </span>
            <span>
              <label htmlFor="l1Border">Ruchów L1: </label>
              <input id="l1Border" type="number" value="30" />
            </span>
            <span>
              <label htmlFor="l2Border">Ruchów L2: </label>
              <input id="l2Border" type="number" value="30" />
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
