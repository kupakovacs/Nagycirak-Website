import React from "react";
import "./Rolunk.css";
import "./Rolunk.js";
import { Cikkek } from "../Hirek/Cikkek";
import { Parallax } from "react-scroll-parallax";
const hirek = Cikkek;

const onkormanyzat = [
  {
    name: "Győrfi Pál",
    picture:
      "https://www.allianz.hu/hu_HU/lakossagi/rolunk/allianz-for-life/allianz-balance/_jcr_content/root/parsys/teaser_group/teasergroup-parsys/teaser_copy_copy_cop_897899881/image.img.82.3360.jpeg/1634652924586/ab-allianz-for-life-gyorf-pal-800x800.jpeg",
  },
  {
    name: "Győrfi Pál",
    picture:
      "https://www.allianz.hu/hu_HU/lakossagi/rolunk/allianz-for-life/allianz-balance/_jcr_content/root/parsys/teaser_group/teasergroup-parsys/teaser_copy_copy_cop_897899881/image.img.82.3360.jpeg/1634652924586/ab-allianz-for-life-gyorf-pal-800x800.jpeg",
  },
  {
    name: "Győrfi Pál",
    picture:
      "https://www.allianz.hu/hu_HU/lakossagi/rolunk/allianz-for-life/allianz-balance/_jcr_content/root/parsys/teaser_group/teasergroup-parsys/teaser_copy_copy_cop_897899881/image.img.82.3360.jpeg/1634652924586/ab-allianz-for-life-gyorf-pal-800x800.jpeg",
  },
  {
    name: "Győrfi Pál",
    picture:
      "https://www.allianz.hu/hu_HU/lakossagi/rolunk/allianz-for-life/allianz-balance/_jcr_content/root/parsys/teaser_group/teasergroup-parsys/teaser_copy_copy_cop_897899881/image.img.82.3360.jpeg/1634652924586/ab-allianz-for-life-gyorf-pal-800x800.jpeg",
  },
];

const latvanyossagok = [
  {
    name: "atomreakotr",
    picture:
      "data:image/jpeg;base64,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",
    leiras:
      "ez egy atomreaktor ami nagyon menő és nem akarok róla sokat írni mert nem létezik",
  },
  {
    name: "vár",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg/1200px-Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg",
    leiras:
      "ez a falu várja ami angyon menő hiszen egy vár és az már hogy ne lenne menő",
  },
  {
    name: "tér",
    picture:
      "data:image/jpeg;base64,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",
    leiras:
      "ez a falu térje és egyszerűen elképesztően menő hiszen létezik és igen",
  },
  {
    name: "atópálya",
    picture:
      "https://assets.telex.hu/images/20220506/1651827339-temp-iANPGe_cover.jpg",
    leiras:
      "ez egy atópáa és nagyon menő és nagyon nagyon szép és olcsó volt megépíteni",
  },
];

const esemenyek = [
  {
    name: "csütörtöki cica cirógatás",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg",
    descption: "Minden csütrötökön 12:02-től 12:57-ig egy macskát simogatunk",
  },
];

export const Rolunk = () => {
  const resizeTitle = () => {
    setTimeout(() => {
      let titles = document.querySelectorAll(".mainTitle");
      console.log(titles);

      for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        element.id = "mainTitleSmall" + (index + 1).toString();
      }
      animateMenu();
    }, 2000);
  };
  const animateMenu = async () => {
    const animateMenu = document.getElementById("blob-container");
    const timeout = 900;

    const keyframes = {
      marginTop: "-1090px",
    };
    var i = 0;
    animateMenu.childNodes.forEach((child) => {
      console.log(child);
      i++;
      const delay = i * 20.0;
      child.animate(keyframes, {
        duration: timeout,
        fill: "forwards",
        easing: "ease-out",
        delay: delay,
      });
    });

    const villageHero = document.getElementById("heroColapser");

    const reisze = {
      top: "-400px",
    };

    villageHero.animate(reisze, {
      duration: timeout,
      fill: "forwards",
      easing: "ease-out",
    });

    const contentContainer = document.getElementById("contentContainer");
    contentContainer.animate(
      {
        top: "300px",
      },
      {
        duration: timeout,
        fill: "forwards",
        easing: "ease-out",
      }
    );
  };

  return (
    <div>
      <h1
        style={{ color: "#CE2939", zIndex: "3" }}
        className="mainTitle"
        id="mainTitle1"
      >
        Nagycirák
      </h1>
      <h1
        style={{ color: "#FFFFFF", zIndex: "3" }}
        className="mainTitle"
        id="mainTitle2"
      >
        Nagycirák
      </h1>
      <h1
        style={{ color: "#477050", zIndex: "3" }}
        onLoad={resizeTitle()}
        className="mainTitle"
        id="mainTitle3"
      >
        Nagycirák
      </h1>
      <div
        style={{
          //backgroundImage:
          //  "url(https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80)",
          width: "100%",
          height: "750px",
          top: "0px",
          left: "0px",
          transform: "translate(0%, 0)",
          scale: "1",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "1",
          position: "absolute",
        }}
        id="heroColapser"
      >
        <h1
          style={{
            position: "absolute",
            top: "300px",
            left: "600px",
            fontSize: "80px",
            zIndex: "2",
          }}
        >
          A legmenőbb falu
        </h1>
      </div>
      <center
        style={{
          position: "absolute",
          top: "590px",
          left: "0px",
          width: "100%",
        }}
        id="optionsMenu"
      >
        <div
          id="blob-container"
          className="blob-container"
          style={{ position: "absolute" }}
        >
          <div
            className="categoryBlob"
            style={{ marginLeft: "5%" }}
            onClick={() =>
              window.scrollTo({
                behavior: "smooth",
                top: `${document.getElementById("onkormanyzatDiv").offsetTop}`,
                left: "0",
              })
            }
          >
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
            />

            <h1>önkormáyztaunk</h1>
          </div>

          <div
            className="categoryBlob"
            onClick={() =>
              window.scrollTo({
                behavior: "smooth",
                top: `${document.getElementById("latvanyossagDiv").offsetTop}`,
                left: "0",
              })
            }
          >
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
            />
            <h1>látványosságok</h1>
          </div>
          <div
            className="categoryBlob"
            onClick={() =>
              window.scrollTo({
                behavior: "smooth",
                top: `${document.getElementById("hirekDiv").offsetTop}`,
                left: "0",
              })
            }
          >
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
            />
            <h1>hírek</h1>
          </div>
          <div className="categoryBlob">
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
              onClick={() =>
                window.scrollTo({
                  behavior: "smooth",
                  top: `${document.getElementById("esemenyekDiv").offsetTop}`,
                  left: "0",
                })
              }
            />
            <h1>események</h1>
          </div>
        </div>
      </center>
      <div
        style={{
          position: "absolute",
          top: "700px",
          left: "0px",
          width: "100%",
        }}
        id="contentContainer"
      >
        <h1 style={{}}>Rólunk:</h1>
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <img
            width="100%"
            height="400px"
            src="https://i.pinimg.com/originals/6b/ac/ec/6bacece5f80bbdeadb697964cdf4a811.jpg"
          />
          <h4>
            Mi egy transzfób homofób rassizsta nekrofil közösség vagyunk, és
            imádjuk az erőszakot, anarchia van a faluban, mindenki azt lop amit
            csak akar
          </h4>
          <div>
            <h1>Testvértelepülésünk: </h1>
            <h4>
              Nagycirák testvér települése a közepes-cirák. A két település
              egymástól kb 7km-re helyeszkednek el. A kapcsolat eredetileg
              1926-ban jött létre, amikor a két település egymás ellen
              játszottak régionális foci mecset, ebből készítettek tradíciót
              ahol, minden évbe egyszer játszanak egy mecset egymással.
            </h4>
          </div>
          <img
            width="100%"
            height="400px"
            src="https://i.pinimg.com/originals/6b/ac/ec/6bacece5f80bbdeadb697964cdf4a811.jpg"
          />
        </div>

        <div>
          <h1>Jövőképünk: </h1>
          <h4
            style={{
              width: "50%",
              transform: "translate(50%)",
              fontSize: "120%",
            }}
          >
            Mint egy város, az a célunk, hogy minél nagyobra nőjünk. Ezt úgy
            tervezzük elérni, hogy építünk több házat, hogy ne legyen túl drága
            Nagycirákra költözni, csökkentsük az ingatlanárakat. Tervezzük az
            iparűzési adót csökkenti, hogy több céget tudjunk a városba vonzani.
            A jövőbe be szeretnénk vezetni több családtámogatási programot.
          </h4>
        </div>

        <h1>Önkormáyztaunk: </h1>
        <div
          id="onkormanyzatDiv"
          style={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%" }}
        >
          {onkormanyzat.map((value, key) => {
            return (
              <div key={key} style={{}}>
                <img
                  style={{
                    width: "250px",
                    height: "270px",
                    borderRadius: "5px",
                  }}
                  src={`${value.picture}`}
                ></img>
                <h3>{value.name}</h3>
              </div>
            );
          })}
        </div>
        <div id="latvanyossagDiv" style={{ overflowY: "scroll" }}>
          <h1>Látványosságok:</h1>
          <div style={{ display: "flex", backgroundColor: "#fffff" }}>
            {latvanyossagok.map((value, key) => {
              return (
                <div
                  key={key}
                  style={{
                    placeItems: "center",
                    marginLeft: "10px",
                    border: "2px solid black",
                    background: "#fff",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    className="thingsImage"
                    style={{
                      backgroundImage: `url(${value.picture})`,
                    }}
                  />
                  <h1>{value.name}</h1>
                  <h4>{value.leiras}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div id="hirekDiv">
          <h1>Hírek:</h1>
          <marquee
            scrolldelay="30"
            truespeed="30"
            style={{ fontSize: "40px", backgroundColor: "#fffff5" }}
          >
            URGENT HÍR: LACI BÁCSI ÖSSZEFOSTA A POSTAHIVATAL VÉCÉJÉT
          </marquee>
          <div style={{ display: "flex" }}>
            {hirek.map((value, key) => {
              return (
                <div key={key} style={{ marginLeft: "20px" }}>
                  <img src={value.picture} />
                  <h1
                    className="hirNev"
                    onClick={() =>
                      (window.location.pathname = `/hirek/?name=${encodeURIComponent(
                        `${value.name}`
                      )}`)
                    }
                  >
                    {value.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div id="esemenyekDiv">
          <h1>Események: </h1>
          {esemenyek.map((value, key) => {
            return (
              <div
                key={key}
                style={{
                  backgroundImage: `url(${value.picture})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "50%",
                  transform: "translate(50%)",
                  height: "450px",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                }}
              >
                <h1>{value.name}</h1>
                <h3>{value.descption}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
