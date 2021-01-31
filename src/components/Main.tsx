import React, { FunctionComponent } from 'react';
import { Events } from '../types';
import { JumboTron } from './components';
import MainContainer from './MainContainer';


const Main: FunctionComponent<Events> = (props) => {
  return (<main role="main">
    <JumboTron />
    <MainContainer {...props} />
  </main>)
}

export default Main