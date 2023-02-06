/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Head from "next/head";
import { useEffect, useState } from "react";
import CardOne from "./components/cardOne";
import HomeDescription from "./components/homeDescription";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }`;

    const gqlVariables = {
      limit: 10,
      offset: 1,
    };

    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.pokemons.results));
  }, []);

  return (
    <>
      {/* <Head>

      </Head> */}
      <main>
        <div className="data-card-main">
          <div className="tex"></div>
          <div className="poc-img">
            <img src="/Logo.png" alt="" />
          </div>
          <div className="data-card">
            {data.map((data: any) => {
              return (
                <div key={data.url}>{data && <CardOne data={data} />}</div>
              );
            })}
          </div>
        </div>

        <HomeDescription />
      </main>
    </>
  );
}
