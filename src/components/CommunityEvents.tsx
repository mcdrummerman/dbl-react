import React, { FunctionComponent } from 'react';
import { Events } from '../types';
import dayjs from 'dayjs';
const timeFormat = 'h:mmA';

const CommunityEvents: FunctionComponent<Events> = ({ events }) => {
    return (
        <div className="col-md-12 col-sm-12">
            <h2><i className="far fa-calendar-alt"></i>&nbsp;Upcoming&nbsp;Events</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Links</th>
                    </tr>
                </thead>
                <tbody>
                    {(events ?? []).filter(item => {
                        const end = dayjs(item.endIsoString),
                            now = dayjs();
                        return now.isBefore(end);
                    }).map((item) =>

                        <tr key={item.id} data-date={new Date(item.endIsoString).toString()}>
                            <th scope="row">{item.title}</th>
                            <td>{dayjs(item.startIsoString).format('dddd, MMMM D, YYYY')}</td>
                            <td>{dayjs(item.startIsoString).format(timeFormat)} - {dayjs(item.endIsoString).format(timeFormat)}</td>
                            <td><a
                                href={item.location}
                                target="_blank" rel="noopener noreferrer">Link</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    );
};

export default CommunityEvents;