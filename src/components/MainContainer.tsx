import React from 'react';
import { PrimaryRow, EventsRow } from './components';

const MainContainer: React.FC = () => {
  
  return (
    <div className="container-fluid">
      <PrimaryRow />
      <div className="row">&nbsp;</div>
      <EventsRow />
    </div>)
}

export default MainContainer