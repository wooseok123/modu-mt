import { redirect } from "next/navigation";
export const revalidate = 0;

export default async function Home() {
  // const { data } = await apolloClient.query({
  //   query: GET_ALL_GENRES,
  // });
  // console.log(data);
  redirect("/mt-game");
}
