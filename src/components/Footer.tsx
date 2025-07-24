import React from 'react';


const Footer: React.FC = () => {
  return (<footer className="container">
    <div className="row">
      <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="Email" href="mailto:info@dbl.bike">

          <i className="fas fa-envelope fa-4x" aria-hidden="true"></i>

        </a>
      </div>
      <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="Facebook" href="https://www.facebook.com/groups/345613403039899">

          <i className="fab fa-facebook-square fa-4x" aria-hidden="true"></i>

        </a>
      </div>
      <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="bluesky" href="https://bsky.app/profile/denverbicyclelobby.bsky.social">
          <i className="fa-brands fa-bluesky fa-4x"></i>
        </a>

      </div>
           <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="bluesky" href="https://www.threads.com/@denverbicyclelobby">
          <i className="fa-brands fa-threads fa-4x"></i>
        </a>

      </div>
      <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="instagram" href="https://www.instagram.com/denverbicyclelobby/">

          <i className="fab fa-instagram fa-4x" aria-hidden="true"></i>

        </a>

      </div>
      <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="Youtube" href="https://www.youtube.com/channel/UCPubgXuLvHhBEYWzCnM2_xQ">

          <i className="fab fa-youtube fa-4x" aria-hidden="true"></i>

        </a>

      </div>
      {/* <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="TikTok" href="https://www.tiktok.com/@denverbicyclelobby">

          <i className="fab fa-tiktok fa-4x" aria-hidden="true"></i>

        </a>

      </div> */}
      {/* <div className="col-xs-2 mx-2 mb-1">
        <a target="_blank" rel="noopener noreferrer" title="Blog" href="http://blog.dbl.bike">

          <i className="fas fa-blog fa-4x" aria-hidden="true"></i>

        </a>

      </div> */}

    </div>
    <p>&copy; DBL {(new Date().getFullYear())}</p>
  </footer>)
}

export default Footer