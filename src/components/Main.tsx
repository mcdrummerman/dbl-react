import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'success',
      text: 'DBL Calls to action',
      linkText: 'Visit the Action Center',
      linkUrl: 'http://denverbicyclelobby.com/action.html',
      show: true
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <CodeOfConduct />
    <MainContainer {...props} />
  </main>)
}

export default Main