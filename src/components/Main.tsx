import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { JumboTron, Alert } from './components';
import MainContainer from './MainContainer';


const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert />
    <JumboTron />
    <MainContainer {...props} />
  </main>)
}

export default Main