import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MainContainer, JumboTron, Alert, CodeOfConduct } from '.';

const Main: FunctionComponent<CalendarEvents> = (props) => {
  return (<main role="main">
    <Alert  {...{
      type: 'success',
      text: 'N. Tejon is an important connection for riders.',
      linkText: 'Show your support for the Tejon Street protected bike lane!',
      linkUrl: 'https://secure.everyaction.com/8TztGmOoW0O-rSV4BF9O0g2',
      show: false
    }} />
    <JumboTron {...{ styleOverrides: { marginBottom: 0 } }} />
    <CodeOfConduct />
    <MainContainer {...props} />
  </main>)
}

export default Main