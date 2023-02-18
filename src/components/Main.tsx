import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';
import About from './About';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'warn',
      text: 'DBL Candidate ',
      linkText: 'Questionare Responses!',
      linkUrl: 'http://denverbicyclelobby.com/candidates2023.html',
      show: true
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <About />
    <CodeOfConduct />

    <MainContainer {...props} />
  </main>)
}

export default Main