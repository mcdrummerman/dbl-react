import { Component } from 'react';
import React from 'react';
import { NavBar, Main, Footer } from './components/components';
import './App.css';
import Axios from 'axios';
import dayjs from 'dayjs'

type StorageType = { date: Date, data: any };

class App extends Component {
  private calendarData: any;
  private storageKey = 'cal-data';

  async componentDidMount() {
    await this.getData();
    this.forceUpdate();
  }

  private set storage(data: StorageType | null) {
    if (!data) {
      sessionStorage.removeItem(this.storageKey);
    } else {
      sessionStorage.setItem(this.storageKey, JSON.stringify(data))
    }
  }

  private get storage(): StorageType | null {
    const item = sessionStorage.getItem(this.storageKey);
    if (!item) {
      return null;
    }
    const data = JSON.parse(item) as StorageType;
    const difference = dayjs().diff(dayjs(data.date), 'minute');
    if (difference <= 5) {
      return data;
    }
    return null;
  }

  async getData() {
    try {
      if (this.storage) {
        return this.storage.data;
      }
      const response = await Axios.get('https://dbl-data.s3-us-west-2.amazonaws.com/dbl-events.json');
      this.calendarData = response.data
      this.storage = { date: new Date(), data: response.data };

    } catch (e) {
      //console.log(e)
    }
  }

  render() {
    const props = {events:this.calendarData};
    return (<div>
      <NavBar />
      <Main {...props}/>
      <Footer />
    </div>
    );
  }


}

export default App;
