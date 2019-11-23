import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (<div>
    <div className="alert alert-success d-none" data-show-after="2019-11-21T01:00:00.000Z" role="alert">
      🚨 QUICK EMAIL ACTION 🚨: <a href="http://bit.ly/vru-den" target="_blank">Email Denver's DA to support usage of the
      Vulnerable Road User Bill</a>
    </div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="http://denverbicyclelobby.com">Denver Bicycle Lobby</a>
      <button className="navbar-toggler d-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse" id="navbarsExampleDefault">

        <a className="" href="https://denverbicyclelobby.store" target="_blank">Swag</a>

      </div>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 " type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
        </form>
      </div> */}
    </nav>
    <main role="main">
      <div className="jumbotron">
        <img src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/DBL-logo-small.jpg" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h2><i className="far fa-calendar-alt"></i> Next DBL Meeting</h2>

            <div className="alert alert-primary text-center" data-show-after="2019-11-21T03:00:00.000Z" role="alert">
              <p>TBD</p>
            </div>

            <div className="col-12">
              <div className="text-center">
                <a href="https://dribbble.com/shots/2400516-Cycling-the-Seasons" target="_blank">
                  <img src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/source.gif"
                    alt="Cycling the Seasons" title="Cycling the Seasons" id="cycling-the-seasons" className="img-fluid rounded"
                  /></a>
              </div>
              <br />
            </div>
            <br />

          </div>
          <div className="col-md-4">
            <h2><i className="fas fa-mail-bulk"></i> Join our mailing list</h2>
            <p>On occasion, we'd like to reach out and inform you about Denver Bicycle Lobby events or ask you a question.
          </p>
            <p><a className="btn btn-primary" target="_blank" href="https://mailchi.mp/f6067647edc7/denverbicyclelobby"
              role="button">Join</a></p>


            <h2><i className="fas fa-tshirt"></i> Swag</h2>
            <div className="media swag-media">
              <a href="https://denverbicyclelobby.store" target="_blank"><img
                src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/Screen+Shot+2019-11-16+at+12.08.36+PM.png"
                className="mr-3 swag-image" alt="Swag" /></a>
              <div className="media-body">
                Want to represent the Denver Bicycle Lobby, order your own DBL t-shirt here.
            </div>
            </div>
            <p><a className="btn btn-primary" target="_blank" href="https://denverbicyclelobby.store" role="button">Get
              Stuff</a></p>
            {/* <div className="card" style="width: 18rem;">
            <img src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/Screen+Shot+2019-11-16+at+12.08.36+PM.png" className="card-img-top" alt="...">
            <div className="card-body">
              <p className="card-text">  Want to represent the Denver Bicycle Lobby, order your own DBL t-shirt here.</p>
              <a className="btn btn-primary" target="_blank" href="https://denverbicyclelobby.store" role="button">
                Get Stuff</a>
            </div>
          </div>  */}



            <h2><i className="fab fa-slack"></i> Slack Channel</h2>
            <p>Request to join the Slack channel for all the DBL discussions.</p>
            <p><a className="btn btn-primary" target="_blank"
              href="mailto:info@dbl.bike?subject=Slack%20request&body=I%20would%20like%20to%20join%20the%20Denver%20Bicycle%20Lobby%20Slack%20channel!"
              role="button">Request</a></p>
          </div>
          <div className="col-md-4">
            <h2><i className="fas fa-envelope-square"></i> Email the Mayor</h2>
            <p>Let Mayor Hancock know that you want safer streets, now! Be sure to add a personal message.</p>
            <p><a className="btn btn-primary"
              href="mailto:hancock-milehighmayor@denvergov.org,Michael.Hancock@denvergov.org?bcc=info@dbl.bike&cc=Eulois.Cleckley@denvergov.org&subject=Safe%20streets%20for%20Denver%2C%20now%21&body=Mayor%20Hancock%2C%20%0A%0AI%20want%20safe%20streets%20in%20Denver%20now,%20so%20I%20can%20survive.%0A%0A"
              rel="EMAIL">Email Mayor Hancock</a></p>
            <h2><i className="fas fa-poll-h"></i> Surveys</h2>
            <p>Better decisions need data. Help them out by taking these mobility focused surveys.</p>
            <ul>
              <li><a href="http://bit.ly/DenCompleteStreets" target="_blank">Complete Streets Guidelines</a> - Denver
              Public Works</li>
              <li><a href="http://svy.mk/1HS4Wvy" target="_blank">DRCOG Transportation Survey</a> - Denver Regional
              Council of Governments</li>
              <li><a href="https://www.denvergov.org/content/denvergov/en/broadway-mobility/transit/feedback.html"
                target="_blank">Lincoln Transit Enhancements
                Broadway Station to 7th Avenue</a> - Denver Public Works</li>

            </ul>
          </div>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row">
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
                <tr data-date="2019-11-13T18:00:00.000Z">
                  <th scope="row">Denver Streets Congress</th>
                  <td>Wednesday, November 13, 2019</td>
                  <td>11:30AM - 1PM</td>
                  <td><a href="https://www.denverstreetspartnership.org/events/event-9/" target="_blank">Info & RSVP
                    Page</a></td>
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
                    target="_blank">@ Central Park Recreation Center</a></td>
                </tr>
                <tr data-date="2019-12-5T02:00:00.000Z">
                  <th scope="row">City Park Esplanade Bikeway Meeting
                  (<a
                      href="https://www.google.com/maps/place/1600+City+Park+Esplanade,+Denver,+CO+80206/data=!4m2!3m1!1s0x876c7eb35819577f:0x86a75f49c2f5e25?sa=X&ved=2ahUKEwj79o_Q1bDlAhXFsJ4KHdGzBQUQ8gEwAHoECB4QAQ"
                      target="_blank">East High</a>)
                </th>
                  <td>Wednesday, December 4, 2019</td>
                  <td>5:30PM - 7PM</td>
                  <td><a
                    href="https://s3.us-west-2.amazonaws.com/denverbicyclelobby.com/files/Flyer_HighComfortBikeways_CityParkEsp.pdf"
                    target="_blank">Info</a></td>
                </tr>
                <tr data-date="2019-12-06T02:30:00.000Z">
                  <th scope="row">W 23rd Ave. Bikeway Meeting #2</th>
                  <td>Thursday, December 5, 2019</td>
                  <td>5:30PM - 7:30PM</td>
                  <td><a
                    href="https://www.google.com/maps/place/Riverside+Church,+sbc/@39.751789,-105.018224,15z/data=!4m5!3m4!1s0x0:0xa1cb42fb6f9f8b2e!8m2!3d39.751789!4d-105.018224"
                    target="_blank">@ Riverside Church</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mx-auto">
            <div className="alert alert-info center-block col-auto" role="alert"> <i className="fa fa-list"
              aria-hidden="true"></i>
              Are we missing something? Send us a note at <a href="mailto:info@dbl.bike" target="_blank">info@dbl.bike</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="container">
      <div className="row">

        <a target="_blank" href="https://www.facebook.com/groups/345613403039899">

          <i className="fab fa-facebook-square fa-4x"></i>

        </a>

      </div>
      <p>&copy; DBL 2019</p>
    </footer>
  </div>
  );
}

export default App;
