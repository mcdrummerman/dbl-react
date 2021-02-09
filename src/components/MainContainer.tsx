import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { PrimaryRow, EventsRow } from '.';

const MainContainer: FunctionComponent<CalendarEvents> = (props) => {

  return (
    <div className="container-fluid">
      <PrimaryRow {...props} />
      <div className="row">&nbsp;</div>
      <EventsRow {...props} />
    </div>)
}

export default MainContainer