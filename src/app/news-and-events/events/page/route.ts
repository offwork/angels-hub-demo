import { redirect } from "next/navigation";

export async function GET() {
  redirect("/news-and-events/events/page/1")
}