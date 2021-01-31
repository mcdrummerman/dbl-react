import React from 'react';

const PublicMeetings: React.FC = () => {
    return (
        <div className="col-md-6 col-sm-12">
            <h2><i className="far fa-calendar-alt"></i>&nbsp;Upcoming&nbsp;Public&nbsp;Meetings</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="row">Event</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Links</th>
                    </tr>
                </thead>
                <tbody>

                    <tr data-date="2019-11-22T02:00:00.000Z">
                        <th scope="row">Central Park Boulevard from Montview Boulevard to 36th Avenue</th>
                        <td>Thursday, November 21, 2019</td>
                        <td>5:30PM - 7PM</td>
                        <td><a
                            href="https://www.google.com/maps/place/Central+Park+Recreation+Center/@39.7611172,-104.8750806,15z/data=!4m2!3m1!1s0x0:0x982bd382c73ac642?sa=X&ved=2ahUKEwi9ncLf5djlAhWRpp4KHT81CCYQ_BIwJ3oECCMQCA"
                            target="_blank" rel="noopener noreferrer">@ Central Park Recreation Center</a></td>
                    </tr>
                    <tr data-date="2019-12-5T02:00:00.000Z">
                        <th scope="row">City Park Esplanade Bikeway Meeting
          (<a
                                href="https://www.google.com/maps/place/1600+City+Park+Esplanade,+Denver,+CO+80206/data=!4m2!3m1!1s0x876c7eb35819577f:0x86a75f49c2f5e25?sa=X&ved=2ahUKEwj79o_Q1bDlAhXFsJ4KHdGzBQUQ8gEwAHoECB4QAQ"
                                target="_blank" rel="noopener noreferrer">East High</a>)
        </th>
                        <td>Wednesday, December 4, 2019</td>
                        <td>5:30PM - 7PM</td>
                        <td><a
                            href="https://s3.us-west-2.amazonaws.com/denverbicyclelobby.com/files/Flyer_HighComfortBikeways_CityParkEsp.pdf"
                            target="_blank" rel="noopener noreferrer">Info</a></td>
                    </tr>
                    <tr data-date="2019-12-06T02:30:00.000Z">
                        <th scope="row">W 23rd Ave. Bikeway Meeting #2</th>
                        <td>Thursday, December 5, 2019</td>
                        <td>5:30PM - 7:30PM</td>
                        <td><a
                            href="https://www.google.com/maps/place/Riverside+Church,+sbc/@39.751789,-105.018224,15z/data=!4m5!3m4!1s0x0:0xa1cb42fb6f9f8b2e!8m2!3d39.751789!4d-105.018224"
                            target="_blank" rel="noopener noreferrer">@ Riverside Church</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PublicMeetings;