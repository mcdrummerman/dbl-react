import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { MeetingBox, DBLActionBox, OtherActionBox } from './components';

const PrimaryRow: FunctionComponent<CalendarEvents> = (props) => {
    return (
        <div className="row">
            <MeetingBox {...props} />
            <DBLActionBox />
            <OtherActionBox />
        </div>
    );
};

export default PrimaryRow;