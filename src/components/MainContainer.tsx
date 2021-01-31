import React, { FunctionComponent } from 'react';
import { Events } from '../types';
import { PrimaryRow, EventsRow } from './components';

const MainContainer: FunctionComponent<Events> = (props) => {

  return (
    <div className="container-fluid">
      <PrimaryRow />
      <div className="row">&nbsp;</div>
      <EventsRow {...props} />
    </div>)
}

export default MainContainer