import React, { FC } from 'react';
import dayjs from 'dayjs';
const timeFormat = 'h:mmA';

type ps = { showAfter?: string, hideAfter?: string, name: string, eventStart: Date, eventEnd: Date, url?: string, linkTitle: string }
const EventRow: FC<ps> = ({ name, eventStart, eventEnd, url, linkTitle }) => {
    const dateString = dayjs(eventStart).format('dddd, MMMM D, YYYY');

    return (<tr>
        <th scope="row">{name}</th>
        <td>{dateString}</td>
        <td>{dayjs(eventStart).format(timeFormat)} - {dayjs(eventEnd).format(timeFormat)}</td>
        <td><a
            href={url}
            target="_blank" rel="noopener noreferrer">{linkTitle}</a></td>
    </tr>)

}

export default EventRow;