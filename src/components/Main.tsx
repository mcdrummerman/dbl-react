import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'success',
      text: 'Enjoying Car Free Parks and Shared Streets in Denver? Let your electeds know',
      linkText: 'Email to show support for Open/Shared Streets and Car Free Denver Parks',
      linkUrl: 'http://denverbicyclelobby.com/emails.html'
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <CodeOfConduct />
    <MainContainer {...props} />
  </main>)
}

export default Main