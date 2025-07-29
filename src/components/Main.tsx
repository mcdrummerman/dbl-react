import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';
import About from './About';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'warn',
      text: 'Help us save bike funding for the City of Denver! ',
      linkText: 'Take action now!',
      linkUrl: 'example.com',
      show: false
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <About />
    <CodeOfConduct />

    <MainContainer {...props} />
  </main>)
}

export default Main