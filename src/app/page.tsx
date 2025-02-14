import apolloClient from "@/shared/lib/apollo";
import { GET_ALL_GENRES } from "./page.query";

export const revalidate = 0;

export default async function Home() {
  const { data } = await apolloClient.query({
    query: GET_ALL_GENRES,
  });
  console.log(data);
  return <main></main>;
}
