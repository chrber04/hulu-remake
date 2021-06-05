import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Movies from "../components/Movies";

import requests from "../utils/requests";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Hulu Remake</title>
        <meta name="description" content="Hulu remake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />

      <Movies movies={movies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await response.json();
  const movies = data.results;
  return {
    props: { movies },
  };
}
