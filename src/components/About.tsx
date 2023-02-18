import React, { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return <div className={`alert alert-info`} role="alert" style={{ fontSize: 'large', fontWeight: 'bold', marginBottom: '0' }}>
    The Denver Bicycle Lobby is a grassroots group of residents organizing for safe, connected, and equitable bicycle infrastructure
  </div>;
}

export default About;