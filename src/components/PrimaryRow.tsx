import React from 'react';
import { MeetingBox, DBLActionBox, OtherActionBox } from './components';

const PrimaryRow: React.FC = () => {
    return (
        <div className="row">
            <MeetingBox />
            <DBLActionBox />
            <OtherActionBox />
        </div>
    );
};

export default PrimaryRow;