import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const CardOne: NextPage<any> = ({ data }: any) => {
  const router = useRouter();

  const seeDetails = (url: any) => {
    router.push({
      pathname: "/details",
      query: { url },
    });
  };
  return (
    <CardOneContainer>
      <div
        className="main-card"
        onClick={() => {
          seeDetails(data.url);
        }}
      >
        <div className="img-text">
          <img src={data.image} alt="" />
          <span>#010</span>
        </div>
        <p className="name">{data.name}</p>
        <div className="btn-group">
          <a
            className="green"
            onClick={() => {
              seeDetails(data.url);
            }}
          >
            Grass
          </a>
          <a
            className="pink"
            onClick={() => {
              seeDetails(data.url);
            }}
          >
            Poison
          </a>
        </div>
      </div>
    </CardOneContainer>
  );
};

const CardOneContainer = styled.div`
  .main-card {
    /* position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
    max-width: 190px;
    max-height: 220px;
    /* gap: 5px; */
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 83% 100%, 0 100%);
    padding: 20px 10px;
    .img-text {
      padding: 10px;
      position: relative;
      background-color: #f2f2f2;
      border-radius: 4px;
      /* width: 100%; */
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      span {
        position: absolute;
        top: 10px;
        left: 10px;
      }
      img {
        max-width: 120px;
        width: 100%;
        margin: auto;
        overflow: hidden;
        transition: 0.3s linear;
      }
    }
    .name {
      margin: 12px 0px 5px;
      text-align: left;
      font-size: 14px;
      font-family: "Ubuntu", sans-serif;
    }
    .btn-group {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      a {
        padding: 3px 7px;
        text-decoration: none;
        font-family: "Ubuntu", sans-serif;
        color: #fff;
        border-radius: 3px;
        font-size: 14px;
        cursor: pointer;
      }
      .green {
        background-color: #9bcc50;
      }
      .pink {
        background-color: #b97fc9;
      }
    }
    &:hover {
      background-color: #3383c8;
      .name {
        color: #fff;
      }
      img {
        scale: 1.2;
      }
    }
  }
`;

export default CardOne;
