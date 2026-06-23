import { gql } from "graphql-request";

export const MostRecentQuery = gql`
  query MostRecentEvents {
    events(orderBy: createdAt_DESC, first: 3) {
      id
      coverImage {
        caption
        fileName
        height
        url
        width
      }
      eventTitle
      createdAt
      eventTags
      eventDescription
      eventSlug
    }
  }
`;

export const ViewAllQuery = gql`
  query ViewAll($after: String, $first: Int!, $skip: Int!) {
    eventsConnection(after: $after, first: $first, skip: $skip, orderBy: createdAt_DESC) {
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
        endCursor
      }
      edges {
        node {
          id
          coverImage {
            caption
            fileName
            height
            url
            width
          }
          eventContent {
            html
          }
          eventTitle
          createdAt
          eventTags
          eventDescription
          eventSlug
        }
        cursor
      }
    }
  }
`;

export const ViewAllHeroQuery = gql`
  query ViewAllHero {
    events(orderBy: createdAt_DESC, first: 1) {
      id
      coverImage {
        caption
        fileName
        height
        url
        width
      }
      eventTitle
      createdAt
      eventTags
      eventDescription
      eventSlug
    }
  }
`;

export const ViewCategoryQuery = gql`
  query ViewCategory($after: String, $tag: [Tags!], $first: Int!, $skip: Int!) {
    eventsConnection(
      after: $after
      where: { eventTags_contains_some: $tag }
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
    ) {
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
        endCursor
      }
      edges {
        node {
          id
          coverImage {
            caption
            fileName
            height
            url
            width
          }
          eventTitle
          createdAt
          eventTags
          eventDescription
          eventSlug
        }
        cursor
      }
    }
  }
`;

export const ViewCategoryHeroQuery = gql`
  query ViewCategoryHero($tag: [Tags!]) {
    events(where: { eventTags_contains_some: $tag }, orderBy: createdAt_DESC, first: 1) {
      id
      coverImage {
        caption
        fileName
        height
        url
        width
      }
      eventTitle
      createdAt
      eventTags
      eventDescription
      eventSlug
    }
  }
`;

export const ViewEventQuery = gql`
  query ViewEvent($eventSlug: String!) {
    event(where: { eventSlug: $eventSlug }) {
      id
      eventTitle
      eventDescription
      eventSlug
      createdAt
      coverImage {
        caption
        fileName
        height
        url
        width
      }
      eventContent {
        markdown
      }
    }
  }
`;

export const EventOlderQuery = gql`
  query OlderEvent($createdAtLT: DateTime) {
    events(where: { createdAt_lt: $createdAtLT }, orderBy: createdAt_DESC, first: 1) {
      id
      eventTitle
      createdAt
      eventSlug
      coverImage {
        caption
        fileName
        height
        url
        width
      }
    }
  }
`;

export const EventNewerQuery = gql`
  query NewerEvent($createdAtGT: DateTime) {
    events(where: { createdAt_gt: $createdAtGT }, orderBy: createdAt_ASC, first: 1) {
      id
      eventTitle
      createdAt
      eventSlug
      coverImage {
        caption
        fileName
        height
        url
        width
      }
    }
  }
`;

/* use for sitemap xml */
export const AllPagesQuery = gql`
  query AllPages($first: Int!, $skip: Int!) {
    eventsConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      aggregate {
        count
      }
      edges {
        node {
          eventSlug
        }
      }
    }
  }
`;

export const CategoryPagesQuery = gql`
  query CategoryPages($first: Int!, $skip: Int!, $tag: [Tags!]) {
    eventsConnection(
      first: $first
      skip: $skip
      where: { eventTags_contains_some: $tag }
      orderBy: createdAt_DESC
    ) {
      aggregate {
        count
      }
      edges {
        node {
          eventSlug
        }
      }
    }
  }
`;
