import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

const HomeDescription: NextPage<any> = () => {
  const router = useRouter();

  return (
    <HomeDescriptionContainer>
      <div className="top-text">
        <h2>Ash & Pikachu Arrive in Pokemon Universe</h2>
      </div>
    </HomeDescriptionContainer>
  );
};

const HomeDescriptionContainer = styled.div`
  .top-text {
    max-width: 400px;
    padding: 10px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    h2 {
      text-align: center;
      background-image: url(/assets/Brush.png);
    }
  }
`;

export default HomeDescription;
