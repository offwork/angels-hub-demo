import Categories from "@/app/news-and-events/_components/AHCategories";
import Events from "@/app/news-and-events/_components/AHEvents";
import HeroEvent from "@/app/news-and-events/_components/AHHeroEvent";
import Pagination from "@/app/news-and-events/_components/AHPagination";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import meta from "@/config/meta";
import { PER_PAGE_SIZE } from "@/constant";
import { getViewAll, getViewAllHero } from "@/lib/fetch";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  if (isNaN(Number(params.id)) || Number(params.id) <= 0) return notFound();

  const pageNumber =
    Number(params.id) === 2 ? PER_PAGE_SIZE : Number(params.id) * PER_PAGE_SIZE - PER_PAGE_SIZE;

  const heroEvent = await getViewAllHero();

  if (!heroEvent) return notFound();

  const viewAll = await getViewAll(heroEvent.events[0].id, pageNumber);

  if (!viewAll) {
    return notFound();
  }
  return {
    metadataBase: new URL(meta.base_url),
    alternates: {
      canonical: `/news-and-events/page/${params.id}`,
    },
    title: `${meta.pages["news-and-events"].title} | Page ${params.id}`,
    description: `${meta.pages["news-and-events"].description} Page ${params.id}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  if (isNaN(Number(params.id)) || Number(params.id) <= 0) return notFound();

  const category = "view-all";

  const pageNumber =
    Number(params.id) === 2 ? PER_PAGE_SIZE : Number(params.id) * PER_PAGE_SIZE - PER_PAGE_SIZE;

  const heroEvent = await getViewAllHero();

  if (!heroEvent) {
    return notFound();
  }

  const hero = heroEvent.events[0];

  const viewAll = await getViewAll(hero.id, PER_PAGE_SIZE, pageNumber);

  if (!viewAll) {
    return notFound();
  }

  const { eventsConnection } = viewAll;
  const { aggregate, edges } = eventsConnection;
  const count = aggregate.count - 1;
  const totalPages = Math.ceil(count / PER_PAGE_SIZE);

  if (isNaN(Number(params.id)) || Number(params.id) < 1 || Number(params.id) > totalPages) {
    return notFound();
  }

  const nodes = edges.map((edge) => edge.node);

  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <AHLink href="/" className="cursor-pointer absolute ml-0 lg:ml-7 top-8 z-30">
          <BrandLogo />
        </AHLink>
      </Link>
      <div className="relative z-10 block w-full pt-36 sm:pt-48 lg:pt-96 xl:pt-56">
        <div className="flex flex-col items-center space-y-9">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">News & Events</h1>
          </div>
          <h2 className="px-6 text-white md:text-2xl text-center">
            Expert insights, industry trends, and key happenings from{" "}
            <span className="font-semibold shadow-sm">AngelsHub</span>
          </h2>
          <Categories />
        </div>
      </div>
      <div className="relative w-full mx-auto z-30 pt-16">
        <div className="container mb-28">
          <HeroEvent {...hero} />
          <Events posts={nodes} />
        </div>
        <Pagination totalPages={totalPages} category={category} />
      </div>
    </>
  );
}
