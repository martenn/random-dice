import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'app/components/layout/Row';
import { StartButton } from 'app/components/buttons';

export const ConfigBoard: FC = () => {
  const history = useHistory();

  const routeChange = () => {
    const path = `/play`;
    history.push(path);
  };

  return (
    <>
      <Row>
        <StartButton start={() => routeChange()}></StartButton>
      </Row>
    </>
  );
};
