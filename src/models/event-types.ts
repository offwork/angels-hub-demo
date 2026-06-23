type Aggregate = { count: number };

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
  endCursor: string;
};

type Edges<TTypes> = {
  node: TTypes;
  cursor: string;
};

type CoverImage = {
  caption: string;
  width: number;
  height: number;
  url: string;
  fileName: string;
};

type Content = {
  markdown: string;
  html:string;
  json?: { children: any[] }
};

type Event = {
  id: string;
  coverImage: CoverImage;
  eventTitle: string;
  createdAt: string;
  eventTags: string[];
  eventDescription: string;
  eventSlug: string;
  eventContent: Content;
};

type EventsConnection = {
  aggregate: Aggregate;
  pageInfo: PageInfo;
  edges: Array<Edges<Event>>;
};

type Events = {
  eventsConnection: EventsConnection;
  __typename?: "Query";
  events: Event[];
};

type EventDetails = {
  event: Event;
};

type EventOlderORNewer = {
  events: Array<Event>;
};

export type { CoverImage, Edges, Event, EventDetails, Events, EventsConnection, EventOlderORNewer, PageInfo };

