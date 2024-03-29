import React, { FunctionComponent } from 'react';


const InfoBlock: FunctionComponent = () => {
  return (<div className="mx-auto">
    <div className="alert alert-info center-block col-auto" role="alert"> <i className="fa fa-list"
      aria-hidden="true"></i>&nbsp;
      Are we missing something? Send us a note at <a href="mailto:info@dbl.bike" target="_blank" rel="noopener noreferrer">info@dbl.bike</a>
    </div>
  </div>)
}

export default InfoBlock