import React from 'react';


const Footer: React.FC = () => {
  return (<footer className="container">
    <div className="row">

      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/345613403039899">

        <i className="fab fa-facebook-square fa-4x"></i>

      </a>

    </div>
    <p>&copy; DBL {(new Date().getFullYear())}</p>
  </footer>)
}

export default Footer