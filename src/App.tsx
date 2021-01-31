import { Component } from 'react';
import React from 'react';
import { NavBar, Main, Footer } from './components/components';
import './App.css';
import { curly } from 'node-libcurl';

class App extends Component {
  private iCal: any;

  async componentWillMount() {
    await this.getData()
  }

  async getData() {
    try {
      const { data } = (await curly.get('http://example.com'));
      this.iCal = data

    } catch (e) {
      this.iCal = JSON.stringify(e);
    }
  }

  render() {
    return (<div>
      <div>{JSON.stringify(this.iCal)}</div>
      <NavBar />
      <Main />
      <Footer />
    </div>
    );
  }


}

//= () => {
//   return (<div>
//     <div className="alert alert-success d-none" data-show-after="2019-11-21T01:00:00.000Z" role="alert">
//       🚨 QUICK EMAIL ACTION 🚨: <a href="http://bit.ly/vru-den" target="_blank" rel="noopener noreferrer">Email Denver's DA to support usage of the
//       Vulnerable Road User Bill</a>
//     </div>
//     <NavBar />
//     <Main />
//     <Footer />
//   </div>
//   );
// }

// App

export default App;
