import React, { FunctionComponent } from 'react';

const JumboTron: FunctionComponent<{ styleOverrides: React.CSSProperties }> = (props = { styleOverrides: {} }) => {
  return (<div className="jumbotron" style={props.styleOverrides}>
    <img alt="Denver Bicycle Lobby Logo" className="dbl-logo" src="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/img/DBL-logo-small.jpg" />
  </div>)
}

export default JumboTron