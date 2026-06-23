import { redirect } from "next/navigation";

export async function GET() {
  redirect("/news-and-events/news/page/1")
}