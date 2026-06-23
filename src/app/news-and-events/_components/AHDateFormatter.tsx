"use client";
export default function DateFormatter({ dateString }: { dateString: string }) {
  const formatter = (dt: Date) =>
    dt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <time className="whitespace-nowrap" dateTime={dateString}>
      {formatter(new Date(dateString))}
    </time>
  );
}
