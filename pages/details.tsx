import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Pokemon from "../public/Logo.png";
const PokeMonDetails: NextPage<any> = ({ data }: any) => {
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
        .then((res) => {
          setDetails(res);
          console.log(res);
        });
    }
  }, []);

  return (
    <DetaisContainer>
      <div className="main-contents">
        <div className="container">
          <div className="poc-img">
            <img src="/Logo.png" alt="" />
          </div>
          <div className="tex"></div>
          <div className="poc-img">
            {/* <Image src={Pokemon} alt="" width={600}/> */}
          </div>
          <div className="main-content">
            <div>
              <h1 className="h-one">{details.name}</h1>
              <p>
                There is a plant seed on its back right from the day this
                Pokemon is born. The seed slowly grows large
              </p>
              <div className="card-items">
                <div className="item1">
                  <div className="item1-text1">
                    <h3 className="h-three">Height</h3>
                    <p>{details.height}</p>
                  </div>
                  <div className="item1-text2">
                    <h3 className="h-three">Category</h3>
                    <p>Speed</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="item2-text1">
                    <h3 className="h-three">Weight</h3>
                    <p>{details.weight}</p>
                  </div>
                  <div className="item2-text2">
                    <h3 className="h-three">Abilities</h3>
                    {details &&
                      details.abilities &&
                      details.abilities.length &&
                      details?.abilities.map((data: any, i: any) => {
                        return (
                          <p key={i} className="p1">
                            {data.ability.name}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-img-container">
              <img
                className="detail-img"
                src={details?.sprites?.front_default}
                alt=""
              />
            </div>
            <div>
              <div>
                <h2>Type</h2>
                <div>
                  {details &&
                    details.types &&
                    details.types.length &&
                    details?.types.map((data: any, i: any) => {
                      return (
                        <button className="gress-btn" key={i}>
                          {data.type.name}
                        </button>
                      );
                    })}
                </div>
              </div>

              <div>
                <h2>Weaknesses</h2>
                <div>
                  <button className="fire-btn">Fire</button>
                  <button className="psychic-btn">Psychic</button>
                  <button className="flying-btn">Flying</button>
                  <button className="ice-btn">Ice</button>
                </div>
              </div>

              <div>
                <h2>Stats</h2>
                <div className="progress">
                  {details &&
                    details.stats &&
                    details.stats.length &&
                    details?.stats.map((data: any, i: any) => {
                      return (
                        <>
                          <h3 className="h-three"> {data?.stat?.name}</h3>
                          <div className="bar bar-1-1">
                            <span></span>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="back_btn">
            <button className="back_button">
              <i className="fa-solid fa-house"></i>
              <Link className="link" href="/">
                Back to Homepage
              </Link>
            </button>
          </div>
        </div>
      </div>
    </DetaisContainer>
  );
};

const DetaisContainer = styled.div`
  .main-contents {
    margin: 0 5%;
    padding: 20px 0;
  }
  .container {
    display: block;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
  }
  .main-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
  }
  .h-one {
    color: #257bc4;
    padding-bottom: 20px;
  }

  .card-items {
    padding: 0 8%;
    margin-top: 25px;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, #fa7841, #f468ac);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%);
    /* display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 40px; */
  }

  .gress-btn {
    border: none;
    color: #ffff;
    background-color: #9bcc50;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .poison-btn {
    border: none;
    color: #ffff;
    background-color: #b97fc9;
    padding: 5px 10px;
  }

  .fire-btn {
    border: none;
    color: #ffff;
    background-color: #fc7c23;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .psychic-btn {
    border: none;
    color: #ffff;
    background-color: #f366b9;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .flying-btn {
    border: none;
    color: #ffff;
    padding: 5px 10px;
    margin-right: 10px;
    background: linear-gradient(#3dc7ef 50%, #bdbdbd 50%);
  }

  .ice-btn {
    border: none;
    color: #ffff;
    background-color: #3dc7ef;
    padding: 5px 10px;
  }
  .item1 {
    display: flex;
    justify-content: space-between;
  }

  .item2 {
    display: flex;
    justify-content: space-between;
  }

  .bar {
    box-shadow: var(--box-shadow);
    height: 0.5rem;
    margin: 1rem 0;
    background-color: #bdbdbd;
  }

  span {
    display: block;
    height: 100%;
    background-color: #3dc7ef;
  }

  .bar-1-1 span {
    width: 50%;
  }

  .bar-1-2 span {
    width: 80%;
  }

  .bar-1-3 span {
    width: 30%;
  }

  .back_btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back_button {
    border: 3px solid #257bc4;
    color: #ffff;
    background-color: #ffcb05;
    padding: 10px 15px;
  }
  i {
    padding-right: 10px;
  }

  .detail-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail-img {
    max-width: 300px;
    width: 100%;
    margin: auto;
  }
  .item2-text2 {
    margin-right: 4px;
  }
  .link {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
  }
`;

export default PokeMonDetails;
