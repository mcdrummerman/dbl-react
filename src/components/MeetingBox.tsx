import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import dayjs from 'dayjs';
const timeFormat = 'h:mmA';

const MeetingBox: FunctionComponent<CalendarEvents> = ({ dblMeetups }) => {

    const meetup = dblMeetups.length ? dblMeetups.filter(e => dayjs(e.endIsoString).isAfter(dayjs()))[0] : null;
    const meetupIsOver: boolean = !meetup ? true : dayjs(meetup.endIsoString).isBefore(dayjs());

    return (
        <div className="col-md-4">
            <h2><i className="far fa-calendar-alt"></i> Next DBL Meeting</h2>
            {
                meetupIsOver &&
                <div className="alert alert-primary text-center" role="alert">
                    <p><b>TBD</b></p>
                </div>

            }
            {
                !meetupIsOver && meetup !== null &&
                <div>
                    <ul className="list-group">
                        <li className="list-group-item active">{dayjs(meetup.startIsoString).format('dddd, MMMM D, YYYY')}</li>
                        <li className="list-group-item"><i className="far fa-clock"></i> {dayjs(meetup.startIsoString).format(timeFormat)}</li>
                        <li className="list-group-item"><i className="fas fa-info-circle"></i><div dangerouslySetInnerHTML={{ __html: meetup.description }} /></li>
                        <li className="list-group-item"><i className="fas fa-link"></i> <a
                            href={meetup.location} target="_blank" rel="noopener noreferrer">Link</a></li>


                        {/* <li className="list-group-item"><i className="fab fa-accessible-icon"></i> Since you're at home you should be all set</li>
                        <li className="list-group-item"><i className="fas fa-utensils"></i> Bring your own snacks</li>
                        <li className="list-group-item"><i className="fas fa-beer"></i> Bring your own beverage</li> */}
                        <p>
                        </p>
                    </ul>
                </div>

            }
            {meetupIsOver &&
                <div className="col-12">
                    <div className="text-center">
                        <a href="https://dribbble.com/shots/2400516-Cycling-the-Seasons" target="_blank" rel="noopener noreferrer">
                            <img src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/source.gif"
                                alt="Cycling the Seasons" title="Cycling the Seasons" id="cycling-the-seasons" className="img-fluid rounded"
                            /></a>
                    </div>
                    <br />
                </div>
            }
            <br />

        </div>
    );
};

export default MeetingBox;