export type CalendarEvent = {
  startIsoString: string,
  endIsoString: string,
  description: string,
  location: string,
  title: string
};

export type Events = { events: CalendarEvent[] };