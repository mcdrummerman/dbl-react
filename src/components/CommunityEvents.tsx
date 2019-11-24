import React from 'react';
import EventRow from './EventRow';

const CommunityEvents: React.FC = () => {
    return (
        <div className="col-md-6 col-sm-12">
        <h2><i className="far fa-calendar-alt"></i>&nbsp;Upcoming&nbsp;Community&nbsp;Events</h2>
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
                <tr>
                    <th scope="row">Coffee Together w/Bike Shop Girl</th>
                    <td>Every Thursday</td>
                    <td>8:15AM - 9:15AM</td>
                    <td>@<a target="_blank"
                        href="https://www.google.com/maps/place/Fulton+St+%26+E+26th+Ave,+Aurora,+CO+80010/@39.754641,-104.8712527,18.32z/data=!4m5!3m4!1s0x876c7b6040bc41fb:0x333221dbbf51962e!8m2!3d39.7547766!4d-104.8705724">26th
            and Fulton</a> or <a target="_blank"
                            href="https://www.google.com/maps/place/Bike+Shop+Girl+Family+Cyclery/@39.753158,-104.869126,15z/data=!4m5!3m4!1s0x0:0xff32417cbab268c8!8m2!3d39.753158!4d-104.869126">Bike
            Shop Girl Family Cyclery</a> if under 45 deg.</td>
                </tr>
                <tr data-date="2019-11-12T14:30:00.000Z">
                    <th scope="row">Street Safety, Active Transportation & Public Health Panel Discussion</th>
                    <td>Tuesday, November 12, 2019</td>
                    <td>5:30PM - 7:30PM</td>
                    <td><a
                        href="https://ucdenverdata.formstack.com/forms/street_safety_event_registration?fbclid=IwAR3T76_hvdlzWgcOriG3X62KJSSSpNTBUyBKIsJhW31eYmpD64U8khjsUqs"
                        target="_blank">Info & RSVP</a></td>
                </tr>
                {/* <EventRow name="Rob Event" eventStart={new Date()} eventEnd={new Date()} linkTitle="link" url="http://google.com"/> */}
                
                <tr data-date="2019-11-13T18:00:00.000Z">
                    <th scope="row">Denver Streets Congress</th>
                    <td>Wednesday, November 13, 2019</td>
                    <td>11:30AM - 1PM</td>
                    <td><a href="https://www.denverstreetspartnership.org/events/event-9/" target="_blank">Info & RSVP Page</a></td>
                </tr>
                <tr data-date="2019-11-16T23:59:00.000Z">
                    <th scope="row">Aurora Cranksgiving</th>
                    <td>Saturday, November 16, 2019</td>
                    <td>12:30PM - 5PM</td>
                    <td><a
                        href="https://www.eventbrite.com/e/cranksgiving-aurora-tickets-75624195003?fbclid=IwAR2tGxBOybs_dbJlsWBBloAxCerKRQHPTcsioRtsm0sord7Cqw12pYZfK54"
                        target="_blank">Registration Page</a></td>
                </tr>
                <tr data-date="2019-11-18T01:00:00.000Z">
                    <th scope="row">World Day of Remembrance for Road Traffic Victims candlelight vigil</th>
                    <td>Sunday, November 17, 2019</td>
                    <td>5PM - 6PM</td>
                    <td><a href="https://worlddayofremembrance.org" target="_blank">General Info</a></td>
                </tr>
                <tr data-date="2020-01-23T16:00:00.000Z">
                    <th scope="row">Safe Streets Day At The Capitol</th>
                    <td>Thursday, January 23, 2020</td>
                    <td>8AM - 10AM</td>
                    <td><a href="https://www.bicyclecolorado.org/featured-event/safe-streets-day-capitol/"
                        target="_blank">Info Page</a></td>
                </tr>
                <tr data-date="2020-02-11T05:59:59.000Z">
                    <th scope="row">Moving People Forward 2020</th>
                    <td>Monday, February 10, 2020</td>
                    <td></td>
                    <td><a href="https://www.bicyclecolorado.org/events/moving-people-forward/" target="_blank">Info
            Page</a></td>
                </tr>
            </tbody>
        </table>

    </div>

   
    );
};

export default CommunityEvents;