export type SimpleEvent = {
  startIsoString: string,
  endIsoString: string,
  description: string,
  location: string,
  title: string,
  id: string,
  type: MeetingType
};

export type MeetingType = 'dbl-meetup' | 'upcoming-event';

export type CalendarEvents = { upcomingEvents: SimpleEvent[], dblMeetups: SimpleEvent[] };