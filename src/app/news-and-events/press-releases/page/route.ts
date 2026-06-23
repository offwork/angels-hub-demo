import { redirect } from "next/navigation";

export async function GET() {
  redirect("/news-and-events/press-releases/page/1")
}