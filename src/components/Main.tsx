import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';
import About from './About';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'warn',
      text: 'Help save the Larimer Street closure.  ',
      linkText: 'Send an email now!',
      linkUrl: 'https://denverbicyclelobby.com/larimer.html',
      show: true
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <About />
    <CodeOfConduct />

    <MainContainer {...props} />
  </main>)
}

export default Main