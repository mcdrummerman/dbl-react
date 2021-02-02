import React, { FunctionComponent } from 'react';
import { CalendarEvents } from '../types';
import dayjs from 'dayjs';


const CommunityEvents: FunctionComponent<CalendarEvents> = ({ upcomingEvents }) => {
    return (
        <div className="col-md-12 col-sm-12">
            <h2><i className="far fa-calendar-alt"></i>&nbsp;Upcoming&nbsp;Events</h2>
            <h6>View in: <a target="blank"
                href="https://calendar.google.com/calendar/embed?src=nosquish.com_qnc0aue18807gi2j7gn7m5hdhg%40group.calendar.google.com&amp;ctz=America%2FDenver">Google
              Calendar</a> | <a
                    href="https://calendar.google.com/calendar/ical/nosquish.com_qnc0aue18807gi2j7gn7m5hdhg%40group.calendar.google.com/public/basic.ics">.ics</a>
            </h6>
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
                    {(upcomingEvents ?? []).filter(item => {
                        const end = dayjs(item.endIsoString),
                            now = dayjs();
                        return now.isBefore(end);
                    }).map((item) => {
                        const timeFormat = 'h:mmA';
                        const dateFormat = item.isMultiDay ? 'MMMM D, YYYY' : 'dddd, MMMM D, YYYY';
                        return <tr key={item.id} data-date={new Date(item.endIsoString).toString()}>
                            <th scope="row">{item.title}</th>
                            <td>{dayjs(item.startIsoString).format(dateFormat)}{item.isMultiDay && '-'.concat(dayjs(item.endIsoString).format(dateFormat))}</td>
                            <td>{(!item.isMultiDay && dayjs(item.startIsoString).format(timeFormat).concat('-', dayjs(item.endIsoString).format(timeFormat)))}</td>
                            <td>
                                {item.location &&
                                    <a href={item.location}
                                        target="_blank" rel="noopener noreferrer">Link</a>
                                }
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>


    );
};

export default CommunityEvents;