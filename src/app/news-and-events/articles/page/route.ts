import { redirect } from "next/navigation";

export async function GET() {
  redirect("/news-and-events/articles/page/1")
}