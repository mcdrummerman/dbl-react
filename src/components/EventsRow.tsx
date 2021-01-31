import React, { FunctionComponent } from 'react';
import { Events } from '../types';
import { CommunityEvents } from './components';
import InfoBlock from './InfoBlock';

const EventsRow: FunctionComponent<Events> = (props) => {
    return (
        <div className="row">
            <CommunityEvents {...props} />
            <InfoBlock />
        </div>

    );
};

export default EventsRow;