"use client";
import { GET_ALL_GENRES } from "./page.query";
import { useQuery } from "@apollo/client";

export default function MTGame() {
  const {} = useQuery(GET_ALL_GENRES, {
    fetchPolicy: "cache-first",
    pollInterval: 1000 * 60,
    nextFetchPolicy: "cache-first",
  });

  return <main></main>;
}
