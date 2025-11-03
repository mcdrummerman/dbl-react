import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';
import About from './About';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'warn',
      text: 'Help us save bike funding for the City of Denver! ',
      linkText: 'Email council to support mobility budget amendments!',
      linkUrl: 'https://denverbicyclelobby.com/emails.html',
      show: true
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <About />
    <CodeOfConduct />

    <MainContainer {...props} />
  </main>)
}

export default Main