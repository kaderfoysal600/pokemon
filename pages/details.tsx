import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

const PokeMonDetails: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.url) {
      console.warn(router.query.url);
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
  
      fetch(router.query.url as any, {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
     
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }, []);

  return (
    <div className="niloy">
      <h1>heloo</h1>
      <ul></ul>
    </div>
  );
};

export default PokeMonDetails;
