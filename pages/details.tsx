import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

const PokeMonDetails: NextPage = () => {
  const router = useRouter();
  const [details, setDetails] = useState<any>({});

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
          console.log(res)
        });
    }
  }, []);

  return <div className="niloy">
      <h1>{details.name}</h1>
      <ul>
      {(details && details.types && details.types.length) && details?.types.map((data: any,i: any) => {
              return (<li key={i}>{data.type.name}</li>
              );
            })} 
      </ul>
    </div>
  
};

export default PokeMonDetails;
