import { FunctionComponent } from "react";

export type SimpleEvent = {
  startIsoString: string,
  endIsoString: string,
  description: string,
  location: string,
  title: string,
  id: string,
  type: MeetingType,
  isMultiDay: boolean
};

export type MeetingType = 'dbl-meetup' | 'upcoming-event';

export type CalendarEvents = { upcomingEvents: SimpleEvent[], dblMeetups: SimpleEvent[] };

export type AlertProps = { type: 'success' | 'warn' | 'error', text: string, linkText: string, linkUrl: string, show: boolean };