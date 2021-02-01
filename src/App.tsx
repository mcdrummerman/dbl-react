import { Component } from 'react';
import React from 'react';
import { NavBar, Main, Footer } from './components/components';
import './App.css';
import Axios, { AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs'
import { CalendarEvents } from './types';
const DEBUG = false;

type StorageType = { date: Date, data: CalendarEvents };

class App extends Component {
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
    const difference = dayjs().diff(dayjs(data.date), 'minutes');
    if (difference <= 5) {
      return data;
    }
    return null;
  }

  async getData() {
    try {
      if (this.storage && !DEBUG) {
        // we already have the data, return it
        return this.storage.data;
      }
      const response = await Axios.get('https://dbl-data.s3-us-west-2.amazonaws.com/dbl-events.json', { headers: { 'Cache-Control': 'no-store, max-age=0' } as AxiosRequestConfig });

      const data = { date: new Date(), data: response.data };
      // cache the data 
      this.storage = data;
      return data;
    } catch (e) {
    }
  }

  render() {
    const props = {
      upcomingEvents: this.storage?.data?.upcomingEvents ?? [],
      dblMeetups: this.storage?.data?.dblMeetups ?? []
    } as CalendarEvents;
    return (<div>
      <NavBar />
      <Main {...props} />
      <Footer />
    </div>
    );
  }


}

export default App;
