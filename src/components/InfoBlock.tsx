import React from 'react';


const InfoBlock: React.FC = () => {
  return (<div className="mx-auto">
    <div className="alert alert-info center-block col-auto" role="alert"> <i className="fa fa-list"
      aria-hidden="true"></i>
      Are we missing something? Send us a note at <a href="mailto:info@dbl.bike" target="_blank" rel="noopener noreferrer">info@dbl.bike</a>
    </div>
  </div>)
}

export default InfoBlock