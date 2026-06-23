import EventBody from "@/app/news-and-events/_components/AHEventBody";
import EventHeader from "@/app/news-and-events/_components/AHEventDetailsHeader";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import meta from "@/config/meta";
import { getEventNewer, getEventOlder, getViewEvent } from "@/lib/fetch";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EventNavigation from "../_components/AHEventNavigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const eventDetails = await getViewEvent(params.slug);

  const { event } = eventDetails;
  const { eventTitle, eventSlug, eventDescription } = event;

  if (!eventDetails) {
    return notFound();
  }

  return {
    metadataBase: new URL(meta.base_url),
    alternates: {
      canonical: `/news-and-events/${eventSlug}`,
    },
    title: eventTitle,
    description: eventDescription,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const eventDetails = await getViewEvent(params.slug);

  if (!eventDetails) {
    return notFound();
  }

  const { event } = eventDetails;
  const { eventTitle, createdAt, coverImage, eventContent } = event;

  const older = await getEventOlder(createdAt);
  const newer = await getEventNewer(createdAt);

  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <AHLink href="/" className="cursor-pointer absolute ml-0 lg:ml-7 top-8 z-30">
          <BrandLogo />
        </AHLink>
      </Link>
      <div className="relative w-full mx-auto z-30 pt-64 md:pt-80 lg:pt-96 xl:pt-64">
        <div className="w-full mb-28 md:container">
          <div className="relative mx-auto max-w-4xl mb-24">
            <EventHeader coverImage={coverImage} eventTitle={eventTitle} createdAt={createdAt} />
            <div className="mt-24">
              <EventBody content={eventContent.markdown} />
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4 py-12 border-y border-angel-blue-200">
            {older && older.events.length > 0 && (
              <EventNavigation
                label="Older Event"
                className="grid gap-4 text-white"
                eventTitle={older.events[0].eventTitle}
                coverImage={older.events[0].coverImage}
                eventSlug={older.events[0].eventSlug}
              />
            )}
            {newer && newer.events.length > 0 && (
              <EventNavigation
                label="Newer Event"
                className="grid gap-4 text-white justify-items-end text-right"
                eventTitle={newer.events[0].eventTitle}
                coverImage={newer.events[0].coverImage}
                eventSlug={newer.events[0].eventSlug}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
