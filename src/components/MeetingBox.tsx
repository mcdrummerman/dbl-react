import React from 'react';

const MeetingBox: React.FC = () => {
    return (
        <div className="col-md-4">
            <h2><i className="far fa-calendar-alt"></i> Next DBL Meeting</h2>

            <div className="alert alert-primary text-center" data-show-after="2019-11-21T03:00:00.000Z" role="alert">
                <p>TBD</p>
            </div>

            <div className="col-12">
                <div className="text-center">
                    <a href="https://dribbble.com/shots/2400516-Cycling-the-Seasons" target="_blank" rel="noopener noreferrer">
                        <img src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/source.gif"
                            alt="Cycling the Seasons" title="Cycling the Seasons" id="cycling-the-seasons" className="img-fluid rounded"
                        /></a>
                </div>
                <br />
            </div>
            <br />

        </div>
    );
};

export default MeetingBox;