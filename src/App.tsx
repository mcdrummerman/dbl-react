import React from 'react';
import { NavBar, Main, Footer } from './components/components';
import './App.css';

const App: React.FC = () => {
  return (<div>
    <div className="alert alert-success d-none" data-show-after="2019-11-21T01:00:00.000Z" role="alert">
      🚨 QUICK EMAIL ACTION 🚨: <a href="http://bit.ly/vru-den" target="_blank">Email Denver's DA to support usage of the
      Vulnerable Road User Bill</a>
    </div>
    <NavBar />
    <Main />
    <Footer />
  </div>
  );
}

export default App;
