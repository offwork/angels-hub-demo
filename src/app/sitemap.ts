import { absolute } from "@/config/url";
import { PER_PAGE_SIZE } from "@/constant";
import { getAllPages, getCategoryPages } from "@/lib/fetch";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allEvents = await getAllPages(100, 0);
  /* Event Categories */
  const [news, pressReleases, articles, events] = await Promise.all([
    getCategoryPages(100, 0, ["news"]),
    getCategoryPages(100, 0, ["pressReleases"]),
    getCategoryPages(100, 0, ["articles"]),
    getCategoryPages(100, 0, ["events"]),
  ]);

  // ALL EVENTS PAGE
  const { eventsConnection } = allEvents;
  const allEventsCount = eventsConnection.aggregate.count - 1;
  const allEventPagesCount = Math.ceil(allEventsCount / PER_PAGE_SIZE);
  const allEventPages = Array.from(Array(allEventPagesCount)).map((edge, index) => ({
    url: absolute(`news-and-events/page/${++index}`),
    lastModified: new Date(),
  }));

  // NEWS EVENTS PAGE
  const newsEventsCount = news.eventsConnection.aggregate.count - 1;
  const newsEventPagesCount = Math.ceil(newsEventsCount / PER_PAGE_SIZE);
  const newsEventPages = Array.from(Array(newsEventPagesCount)).map((edge, index) => ({
    url: absolute(`news-and-events/news/page/${++index}`),
    lastModified: new Date(),
  }));

  // PRESS RELEASES EVENTS PAGE
  const pressReleasesEventsCount = pressReleases.eventsConnection.aggregate.count - 1;
  const pressReleasesEventPagesCount = Math.ceil(pressReleasesEventsCount / PER_PAGE_SIZE);
  const pressReleasesEventPages = Array.from(Array(pressReleasesEventPagesCount)).map((edge, index) => ({
    url: absolute(`news-and-events/press-releases/page/${++index}`),
    lastModified: new Date(),
  }));

  // ARTICLES EVENTS PAGE
  const articlesEventsCount = articles.eventsConnection.aggregate.count - 1;
  const articlesEventPagesCount = Math.ceil(articlesEventsCount / PER_PAGE_SIZE);
  const articlesEventPages = Array.from(Array(articlesEventPagesCount)).map((edge, index) => ({
    url: absolute(`news-and-events/articles/page/${++index}`),
    lastModified: new Date(),
  }));

  // EVENTS EVENTS PAGE
  const eventsEventsCount = events.eventsConnection.aggregate.count - 1;
  const eventsEventPagesCount = Math.ceil(eventsEventsCount / PER_PAGE_SIZE);
  const eventsEventPages = Array.from(Array(eventsEventPagesCount)).map((edge, index) => ({
    url: absolute(`news-and-events/events/page/${++index}`),
    lastModified: new Date(),
  }));

  // ALL EVENT DETAILS PAGE
  const eventslugs = eventsConnection.edges.map((edge, index) => ({
    url: absolute(`news-and-events/${edge.node.eventSlug}`),
    lastModified: new Date(),
  }));

  return [
    {
      url: absolute(),
      lastModified: new Date(),
    },
    {
      url: absolute("about"),
      lastModified: new Date(),
    },
    {
      url: absolute("angel-investment"),
      lastModified: new Date(),
    },
    {
      url: absolute("careers"),
      lastModified: new Date(),
    },
    {
      url: absolute("contact"),
      lastModified: new Date(),
    },
    {
      url: absolute("cookie-policy"),
      lastModified: new Date(),
    },
    {
      url: absolute("privacy-policy"),
      lastModified: new Date(),
    },
    {
      url: absolute("terms-and-conditions"),
      lastModified: new Date(),
    },
    {
      url: absolute("affiliate-agent-system"),
      lastModified: new Date(),
    },
    {
      url: absolute("crypto-solutions"),
      lastModified: new Date(),
    },
    {
      url: absolute("online-casino"),
      lastModified: new Date(),
    },
    {
      url: absolute("sportsbook"),
      lastModified: new Date(),
    },
    {
      url: absolute("managed-services"),
      lastModified: new Date(),
    },
    {
      url: absolute("turnkey-system"),
      lastModified: new Date(),
    },
    {
      url: absolute("white-label"),
      lastModified: new Date(),
    },
    {
      url: absolute("news-and-events"),
      lastModified: new Date(),
    },
    ...allEventPages,
    ...newsEventPages,
    ...pressReleasesEventPages,
    ...articlesEventPages,
    ...eventsEventPages,
    ...eventslugs,
  ];
}
