import { Component } from 'react';
import React from 'react';
import { NavBar, Main, Footer } from './components';
import './App.css';
import Axios, { AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs'
import { CalendarEvents } from './types';
const DEBUG = false;

type StorageType = { date: Date, data: CalendarEvents, lastModified: string };

class App extends Component {
  private storageKey = 'cal-data';

  async componentDidMount() {
    await this.getData();
    this.forceUpdate();
  }

  private setStorage(data: StorageType | null) {
    if (!data) {
      sessionStorage.removeItem(this.storageKey);
    } else {
      sessionStorage.setItem(this.storageKey, JSON.stringify(data))
    }
  }

  private getStorage(): StorageType | null {
    const item = sessionStorage.getItem(this.storageKey);
    if (!item) {
      return null;
    }
    const data = JSON.parse(item) as StorageType;
    return data;
  }

  private getStorageIfUnchanged(lastModified: string) {
    const data = this.getStorage();
    if (!data) { return null; }

    if (dayjs(lastModified).isSame(dayjs(data.lastModified))) {
      return data;
    }
    return null;
  }

  async getData() {
    try {
      const headResponse = await Axios.head('https://dbl-data.s3-us-west-2.amazonaws.com/dbl-events.json', { headers: { 'Cache-Control': 'no-store, max-age=0' } as AxiosRequestConfig });
      const storedData = this.getStorageIfUnchanged(headResponse?.headers['last-modified']);
      if (storedData && !DEBUG) {
        // we already have the data, return it
        return storedData;
      }

      const response = await Axios.get('https://dbl-data.s3-us-west-2.amazonaws.com/dbl-events.json', { headers: { 'Cache-Control': 'no-store, max-age=0' } as AxiosRequestConfig });

      const data: StorageType = { date: new Date(), data: response.data, lastModified: response.headers['last-modified'] };
      // cache the data 
      this.setStorage(data);
      return data;
    } catch (e) {
    }
  }

  render() {
    const props = {
      upcomingEvents: this.getStorage()?.data?.upcomingEvents ?? [],
      dblMeetups: this.getStorage()?.data?.dblMeetups ?? []
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
