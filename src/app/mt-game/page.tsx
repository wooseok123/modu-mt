import apolloClient from "@/shared/lib/apollo";
import { GET_ALL_GENRES } from "./page.query";

export default async function MTGame() {
  const { data } = await apolloClient.query({
    query: GET_ALL_GENRES,
    fetchPolicy: "cache-first",
    context: {
      caches: "force-cache",
    },
  });
  console.log(data);
  return <main></main>;
}
