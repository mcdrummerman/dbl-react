import React from 'react';
import { JumboTron } from './components';
import MainContainer from './MainContainer';

const Main: React.FC = () => {
  return (<main role="main">
    <JumboTron />
    <MainContainer />
  </main>)
}

export default Main