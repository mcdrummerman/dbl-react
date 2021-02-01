import React, { FunctionComponent } from 'react';

const Alert: FunctionComponent<any> = () => {
  return (
    <div className="alert alert-success" role="alert">
      <span role="img" aria-label="Alert">🚨</span> Enjoying Car Free Parks and Shared Streets in Denver? Let your electeds know: <a href="http://denverbicyclelobby.com/emails.html">Email to show support for Open/Shared Streets and Car Free Denver
      Parks</a>
    </div>)
}

export default Alert