"use client";
import { Event } from "@/models";
import EventCard from "./AHEventCard";

export default function Events({ posts }: { posts: Event[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16 mt-14">
      {posts.map((post, idx) => (
        <EventCard key={post.id} {...post} />
      ))}
    </div>
  );
}
