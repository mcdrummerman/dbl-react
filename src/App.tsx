import { Component } from 'react';
import React from 'react';
import { NavBar, Main, Footer, SpecialEvent, JohnstonFailures } from './components';
import './App.css';
import Axios, { AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs'
import { CalendarEvents } from './types';
const DEBUG = false;

type StorageType = { date: Date, data: CalendarEvents, lastModified: string };

interface AppState {
  activeTab: string;
}

class App extends Component<{}, AppState> {
  private storageKey = 'cal-data';

  constructor(props: {}) {
    super(props);
    this.state = {
      activeTab: 'home'
    };
  }

  async componentDidMount() {
    await this.getData();
    this.forceUpdate();
  }

  handleTabChange = (tab: string) => {
    this.setState({ activeTab: tab });
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
      const url = 'https://denverbicyclelobby.com/dbl-events.json';
      const headResponse = await Axios.head(url, { headers: { 'Cache-Control': 'no-store, max-age=0' } });
      const storedData = this.getStorageIfUnchanged(headResponse?.headers['last-modified']);
      if (storedData && !DEBUG) {
        // we already have the data, return it
        return storedData;
      }

      const response = await Axios.get<CalendarEvents>(url, { headers: { 'Cache-Control': 'no-store, max-age=0' } });

      const data: StorageType = { date: new Date(), data: response.data, lastModified: response.headers['last-modified'] };
      // cache the data 
      this.setStorage(data);
      return data;
    } catch (e) {
    }
  }

  renderTabContent() {
    const props = {
      upcomingEvents: this.getStorage()?.data?.upcomingEvents ?? [],
      dblMeetups: this.getStorage()?.data?.dblMeetups ?? []
    } as CalendarEvents;

    switch (this.state.activeTab) {
      case 'home':
        return <Main {...props} />;
      case 'johnston-failures':
        return <JohnstonFailures />;
      default:
        return <Main {...props} />;
    }
  }

  render() {
    const startString = 'Sun May 23 2021 14:00:00 GMT-0600 (Mountain Daylight Time)';
    const endString = 'Sun May 23 2021 16:20:00 GMT-0600 (Mountain Daylight Time)';

    const start = dayjs(startString);
    const end = dayjs(endString);
    const now = dayjs(new Date());

    // show the special event compopnent if the our custom logic is true
    if (now.isAfter(start) && now.isBefore(end)) {
      return <SpecialEvent />
    }
    // show the standard stuff
    else {
      return (

        <div>
          <NavBar activeTab={this.state.activeTab} onTabChange={this.handleTabChange} />
          {this.renderTabContent()}
          <Footer />
        </div>

      );
    }
  }
}

export default App;
