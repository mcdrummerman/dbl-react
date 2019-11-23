import React from 'react';

const OtherActionBox: React.FC = () => {
    return (
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
    );
};

export default OtherActionBox;