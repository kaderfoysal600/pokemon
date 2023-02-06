import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Brush from "../../../public/brush.png";
import Img4 from "../../../public/Image04.png";
import Img3 from "../../../public/Image03.png";
import Img2 from "../../../public/Image02.png";
import Img1 from "../../../public/Image01.png";
import Img5 from "../../../public/Image05.png";
import Left from "../../../public/Left.png";

const HomeDescription: NextPage<any> = () => {
  const router = useRouter();

  return (
    <HomeDescriptionContainer>
      <div className="section-1">
        <div className="container">
          <div className="section-1-title-area">
            <div className="section-1-title-main">
              <h3>Ash & Pikachu Arrive in Pokemon Universe</h3>
              <Image src={Brush} alt="none" />
            </div>
          </div>

          <div className="section-1-main">
            <div className="section1-left">
              <div className="section1-left-top">
                <div className="section1-left-top1">
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque molestiae quam, incidunt assumenda, veniam vitae
                      dolor sit aspernatur hic, voluptas quas sint consequuntur
                      velit error sed reiciendis! Autem, corrupti quo optio
                      vitae quisquam ratione, ea enim doloremque velit
                      architecto temporibus!
                    </p>
                  </div>
                  <div className="des-with-img">
                    <div className="description">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Saepe non cum beatae ducimus maxime doloremque ex,
                        asperiores eveniet ipsa iste. Aliquid velit suscipit
                        esse veniam hic iusto distinctio a nisi soluta rem atque
                        sed officiis, facilis corrupti. Odit aliquam ducimus
                        voluptates, asperiores quam mollitia placeat aliquid
                        voluptatum debitis temporibus sed.
                      </p>
                    </div>
                    <div className="des-img">
                      <Image className="img-width" src={Img4} alt="none" />
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum incidunt temporibus repellendus veniam quasi.
                      Ipsam eveniet praesentium facilis iusto magnam? Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                      incidunt temporibus repellendus veniam quasi. Ipsam
                      eveniet praesentium facilis iusto magnam? Ipsam eveniet
                      praesentium facilis iusto magnam? Ipsam eveniet
                      praesentium facilis iusto magnam?
                    </p>
                  </div>
                </div>
                <div className="section1-left-top2">
                  <div className="img1">
                    <Image src={Img3} alt="none" />
                  </div>
                  <div className="img2">
                    <Image src={Img2} alt="none" />
                  </div>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  asperiores ipsa ratione in consequuntur officia veritatis
                  corrupti, voluptatem inventore quod id, sit quos nam eveniet
                  velit, cupiditate odio dicta ut. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ea asperiores ipsa ratione in
                  consequuntur officia veritatis corrupti, voluptatem inventore
                  quod id, sit quos nam eveniet velit, cupiditate odio dicta ut.
                </p>
              </div>
            </div>

            <div className="section1-right">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  blanditiis suscipit tempora repudiandae sit nisi aliquam
                  debitis tenetur hic porro. debitis tenetur hic porro.
                </p>
              </div>
              <div className="des-with-img-right">
                <div className="right-img">
                  <Image className="img-width" src={Img5} alt="none" />
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    quis cupiditate quibusdam assumenda facilis doloribus, ab
                    perferendis totam eum placeat vitae animi enim aperiam
                    adipisci quidem magni maiores. Nihil adipisci aut laborum
                    obcaecati ab repellat porro enim ea, molestiae vero ipsa
                    ipsum sunt neque nulla accusantium dolore et, magni nobis
                    commodi, eos culpa dolorum maiores itaque? Voluptate
                    mollitia, aspernatur ratione culpa beatae pariatur
                    recusandae voluptatem quae repudiandae doloribus nostrum
                    nihil, sit possimus. mollitia, aspernatur ratione culpa
                    beatae pariatur recusandae voluptatem quae repudiandae
                    doloribus nostrum nihil, sit possimus. recusandae voluptatem
                    quae repudiandae
                  </p>
                </div>
              </div>

              <div className="des-with-img-right">
                <div className="right-img">
                  <Image className="img-width" src={Img1} alt="none" />
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis asperiores quod est voluptate architecto
                    laboriosam, ducimus corrupti maiores eos enim nisi magnam
                    labore molestiae corporis, reprehenderit recusandae libero
                    suscipit modi temporibus. Illum fuga esse nesciunt delectus,
                    odit vero et unde amet deserunt eveniet harum molestias iure
                    veritatis temporibus consectetur iusto soluta iste mollitia
                    beatae facilis tenetur similique quisquam corrupti omnis.
                    Deserunt ullam error rem ipsum itaque nostrum magni iusto
                    facere cupiditate totam, ad esse impedit numquam. Deserunt
                    ullam error rem ipsum itaque nostrum magni iusto facere
                    cupiditate totam, ad esse impedit numquam.
                  </p>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  harum aliquid tempore earum asperiores eos nisi, laboriosam
                  corporis consequatur alias illum provident maiores
                  perspiciatis architecto, magni eaque veniam quod sunt!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape1">
        <Image src={Left} alt="none" />
        </div>
        <div className="shape2">
        <Image src={Left} alt="none" />
        </div>
      </div>
    </HomeDescriptionContainer>
  );
};

const HomeDescriptionContainer = styled.div`
  .des-img,
  .right-img {
    .img-width {
      width: 180px;
    }
  }
  .section-1 {
    display: block;
    width: 100%;
    background-color: #fff;
    padding: 30px 10px;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
    overflow: hidden;
  }
  .container {
    display: block;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
  }
  .shape1 {
    position: absolute;
    left: 0px;
    top: 0px;
    max-width: 60px;
    width: 100%;
    height: 100%;
    z-index: -10;
    img{
      width:60px;
    }
  }

  .shape2 {
    position: absolute;
    right: 0px;
    top: 0px;
    max-width: 60px;
    width: 100%;
    height: 100%;
    z-index: -10;
    img{
      width:60px;
    }
  }
  .section-1-title-area {
    display: block;
    margin-bottom: 30px;
  }

  .section-1-title-main {
    max-width: 520px;
    width: 100%;
    text-align: center;
    margin: auto;
    position: relative;
    z-index: 8;
    padding: 20px 0 20px 0;
  }
  .section-1-title-main h3 {
    color: #0062bd;
    font-family: $font-en-primary;
    font-weight: 600;
    font-style: normal;
    font-size: 40px;
    line-height: 1.2;
    display: block;
    letter-spacing: 1px;
  }
  .section-1-title-main img {
    width: 100%;
    position: absolute;
    top: -10px;
    max-width: 480px;
    margin: auto;
    left: 0px;
    right: 0px;
    z-index: -8;
  }
  .section-1-main {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 1366px;
  }
  .description {
    display: block;
    margin-bottom: 20px;
    width: 100%;
  }
  .description p {
    color: #121212;
    font-family: $font-en-primary;
    font-weight: 400;
    text-align: justify;
    font-size: 16px;
    line-height: 20px;
  }
  .section1-left-top {
    display: grid;
    grid-template-columns: calc(100% - 195px) 180px;
    grid-gap: 15px;
  }
  .des-with-img {
    display: grid;
    grid-template-columns: calc(100% - 195px) 180px;
    grid-gap: 15px;
  }

  .section1-left-top2 {
    display: block;
  }
  .section1-left-top2 img {
    width: 100%;
    margin-bottom: 15px;
  }
  .des-with-img-right {
    display: grid;
    grid-template-columns: 180px calc(100% - 195px);
    grid-gap: 15px;
  }
`;

export default HomeDescription;
