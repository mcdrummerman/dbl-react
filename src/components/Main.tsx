import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'warn',
      text: 'DBL Candidate ',
      linkText: 'Questionare Responses!',
      linkUrl: 'http://denverbicyclelobby.com/candidates2023.html',
      show: false
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <CodeOfConduct />

    <MainContainer {...props} />
  </main>)
}

export default Main