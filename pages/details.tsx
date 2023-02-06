import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

const PokeMonDetails: NextPage = () => {
  const router = useRouter();
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (router.query.url) {
      fetch(router.query.url as any, {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
     
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) =>{
          setDetails(res)
        });
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
