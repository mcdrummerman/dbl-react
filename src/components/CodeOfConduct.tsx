import React, { FunctionComponent } from "react";

const CodeOfConduct: FunctionComponent = () => {
  return <div className={`alert alert-info`} role="alert" style={{ fontSize: 'large', fontWeight: 'light', marginBottom: '1.5rem' } as React.CSSProperties & { fontWeight: 'light' }}>
    Take the time to read our: <a target="_blank" rel="noopener noreferrer" href="https://s3-us-west-2.amazonaws.com/denverbicyclelobby.com/files/Denver+Bicycle+Lobby+Code+of+Conduct.pdf">Code of Conduct</a>
  </div>;
}

export default CodeOfConduct;