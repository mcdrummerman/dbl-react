import React from 'react';

const OtherActionBox: React.FC = () => {
    return (
        <div className="col-md-4">
            {/* <h2><i className="fas fa-envelope-square"></i> Email the Mayor</h2>
            <p>Let Mayor Hancock know that you want safer streets, now! Be sure to add a personal message.</p>
            <p><a className="btn btn-primary"
                href="mailto:hancock-milehighmayor@denvergov.org,Michael.Hancock@denvergov.org?bcc=info@dbl.bike&cc=Eulois.Cleckley@denvergov.org&subject=Safe%20streets%20for%20Denver%2C%20now%21&body=Mayor%20Hancock%2C%20%0A%0AI%20want%20safe%20streets%20in%20Denver%20now,%20so%20I%20can%20survive.%0A%0A"
                rel="EMAIL">Email Mayor Hancock</a></p> */}
            <h2><i className="fas fa-poll-h"></i> Data & Information</h2>
            <p>Better decisions need data. Help them out by taking these mobility focused surveys.</p>
            <ul>
                <li>Feedback for the Denver Community Transportation Networks can be submitted <a href="https://denvermoves.konveio.com/" target="_blank" rel="noopener noreferrer">here (Konveio)</a></li>
            </ul>
            <h2><i className="fab fa-slack"></i> Slack Channel</h2>
            <p>Request to join the Slack channel for all the DBL discussions.</p>
            <p><a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
                href="mailto:info@dbl.bike?subject=Slack%20request&body=I%20would%20like%20to%20join%20the%20Denver%20Bicycle%20Lobby%20Slack%20channel!"
                role="button">Request</a></p>

        </div>
    );
};

export default OtherActionBox;