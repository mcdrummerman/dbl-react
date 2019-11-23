import React from 'react';
import { CommunityEvents, PublicMeetings } from './components';
import InfoBlock from './InfoBlock';

const EventsRow: React.FC = () => {
    return (
        <div className="row">
            <CommunityEvents />
            <PublicMeetings />
            <InfoBlock />
        </div>

    );
};

export default EventsRow;