import React from 'react';

// Components
import { Box, FlexWrapper, Column, Logo } from '../components';
import Form from '../Form';
import Welcome from '../Welcome';

// Assets
import GiantRobotLTDLogo from '../assets/GiantRobotLTDLogo.svg';

/**
 * Main Layout View
 */
const Main = () => {
  return (
    <FlexWrapper fullHeight fullWidth>
      <Column bgColor="grayDark" p={80}>
        <Box maxWidth={455}>
          <Logo src={GiantRobotLTDLogo} />
          <Welcome />
        </Box>
      </Column>
      <Column bgColor="white" p={24}>
        <Box maxWidth={376}>
          <Form />
        </Box>
      </Column>
    </FlexWrapper>
  );
};

export default Main;
