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
            <p>{/* title here if needed*/}</p>
            <ul>
                <li>DBL Candidate Questionnaire
                    <ul>
                        <li> <a href="https://drive.google.com/file/d/1m1xJYApTwfzIV5FwiqYce6tnHgAvJnki/view?usp=share_link" target="_blank" rel="noopener noreferrer">Mayor Mike Johnston's answers</a></li>
                        <li> <a href="https://denverbicyclelobby.com/candidates2023.html" target="_blank" rel="noopener noreferrer">All Answers</a></li>
                    </ul>
                </li>
                <li>Parks and Rec <a href="https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation/Parks/Trails/Trail-Detours#section-6" target="_blank" rel="noopener noreferrer">Trail detours</a></li>
            </ul>
            {/*
             <h2><i className="fab fa-slack"></i> Slack Channel</h2>
            <p>Request to join the Slack channel for all the DBL discussions.</p>
            <p><a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
                href="mailto:info@dbl.bike?subject=Slack%20request&body=I%20would%20like%20to%20join%20the%20Denver%20Bicycle%20Lobby%20Slack%20channel!"
                role="button">Request</a></p>
            */}

        </div >
    );
};

export default OtherActionBox;