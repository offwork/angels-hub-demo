import { EventDetails, EventOlderORNewer, Events } from "@/models";
import { GraphQLClient } from "graphql-request";
import {
  AllPagesQuery,
  CategoryPagesQuery,
  EventNewerQuery,
  EventOlderQuery,
  MostRecentQuery,
  ViewAllHeroQuery,
  ViewAllQuery,
  ViewCategoryHeroQuery,
  ViewCategoryQuery,
  ViewEventQuery,
} from "./queries";

const hygraph = new GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/clyox75ml00in07w6pucxiwru/master",
  {
    cache: "no-cache",
  }
);

export const getMostRecentEvents = async () => {
  return hygraph.request<Events>(MostRecentQuery);
};

export const getViewAll = async (after?: string, first = 6, skip = 0) => {
  return hygraph.request<Events>(ViewAllQuery, {
    after: after,
    first: first,
    skip: skip,
  });
};

export const getViewAllHero = async () => {
  return hygraph.request<Events>(ViewAllHeroQuery);
};

export const getViewCategory = async (
  after: string,
  first: number,
  skip: number,
  tag: string[]
) => {
  return hygraph.request<Events>(ViewCategoryQuery, {
    after: after,
    first: first,
    skip: skip,
    tag: tag,
  });
};

export const getViewCategoryHero = async (tag: string[]) => {
  return hygraph.request<Events>(ViewCategoryHeroQuery, {
    tag: tag,
  });
};

export const getViewEvent = async (eventSlug: string) => {
  return hygraph.request<EventDetails>(ViewEventQuery, {
    eventSlug: eventSlug,
  });
};

export const getEventOlder = async (createdAtLT: string) => {
  return hygraph.request<EventOlderORNewer>(EventOlderQuery, {
    createdAtLT: createdAtLT,
  });
};

export const getEventNewer = async (createdAtGT: string) => {
  return hygraph.request<EventOlderORNewer>(EventNewerQuery, {
    createdAtGT: createdAtGT,
  });
};

/* use for sitemap xml */
export const getAllPages = async (first: number, skip: number) => {
  return hygraph.request<Events>(AllPagesQuery, {
    first: first,
    skip: skip,
  });
};

export const getCategoryPages = async (first: number, skip: number, tag: string[]) => {
  return hygraph.request<Events>(CategoryPagesQuery, {
    first: first,
    skip: skip,
    tag: tag,
  });
};
