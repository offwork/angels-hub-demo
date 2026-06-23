import RSS from "rss";
import meta from "@/config/meta";
import { NextResponse } from "next/server";
import { getViewAll } from "@/lib/fetch";

export async function GET() {
  const feed = new RSS({
    title:  meta.site_title,
    description:  meta.site_description,
    generator: "RSS for Node and Next.js",
    feed_url: `${meta.base_url}/news-and-events/rss.xml`,
    site_url: meta.base_url,
    copyright: `Copyright ${new Date().getFullYear().toString()}, Angelshub.com`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    image_url: `${meta.base_url}/api/og`,
    ttl: 60,
  });

  const viewAll = await getViewAll(undefined, 10, 0);
  const { eventsConnection } = viewAll;
  const { edges } = eventsConnection;
  const nodes = edges.map((edge) => edge.node);
  
  if (nodes) {
    nodes.map((event) => {
      feed.item({
        title: event.eventTitle,
        description: event.eventDescription,
        url: `${meta.base_url}/news-and-events/${event.eventSlug}`,
        guid: `${meta.base_url}/news-and-events/${event.eventSlug}`,
        author: "Angelshub",
        categories: event.eventTags,
        date: event.createdAt,
        custom_elements: [{
          "content:encoded": { _cdata: `${event.eventContent.html}` }
        }],
      });
    });
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}