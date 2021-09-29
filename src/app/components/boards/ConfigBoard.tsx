import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'app/components/layout/Row';
import { StartButton } from 'app/components/buttons';
import { RadioGroup } from 'app/components/RadioGroup';

export const ConfigBoard: FC = () => {
  const history = useHistory();

  const routeChange = () => {
    const path = `/play`;
    history.push(path);
  };

  return (
    <>
      <Row>
        <RadioGroup />
        <StartButton start={() => routeChange()}></StartButton>
      </Row>
    </>
  );
};
