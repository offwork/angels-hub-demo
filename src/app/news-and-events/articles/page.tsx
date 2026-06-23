import { redirect } from "next/navigation";

export default async function Page() {
  redirect("/news-and-events/articles/page/1");
}
