import React from 'react';

const DBLActionBox: React.FC = () => {
    return (
        <div className="col-md-4">
            <h2><i className="fas fa-mail-bulk"></i> Join our mailing list</h2>
            <p>On occasion, we'd like to reach out and inform you about Denver Bicycle Lobby events or ask you a question.
  </p>
            <p><a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://mailchi.mp/f6067647edc7/denverbicyclelobby"
                role="button">Join</a></p>


            <h2><i className="fas fa-tshirt"></i> Swag</h2>
            <div className="media swag-media">
                <a href="https://denverbicyclelobby.store" target="_blank" rel="noopener noreferrer"><img
                    src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/Screen+Shot+2019-11-16+at+12.08.36+PM.png"
                    className="mr-3 swag-image" alt="Swag" /></a>
                <div className="media-body">
                    Want to represent the Denver Bicycle Lobby, order your own DBL t-shirt here.
    </div>
            </div>
            <p><a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://denverbicyclelobby.store" role="button">Get Stuff</a></p>

            <h2><i className="fab fa-slack"></i> Slack Channel</h2>
            <p>Request to join the Slack channel for all the DBL discussions.</p>
            <p><a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
                href="mailto:info@dbl.bike?subject=Slack%20request&body=I%20would%20like%20to%20join%20the%20Denver%20Bicycle%20Lobby%20Slack%20channel!"
                role="button">Request</a></p>
        </div>
    );
};

export default DBLActionBox;