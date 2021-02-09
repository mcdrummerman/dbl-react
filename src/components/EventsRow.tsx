import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import { CommunityEvents } from '.';
import InfoBlock from './InfoBlock';

const EventsRow: FunctionComponent<CalendarEvents> = (props) => {
    return (
        <div className="row">
            <CommunityEvents {...props} />
            <InfoBlock />
        </div>

    );
};

export default EventsRow;