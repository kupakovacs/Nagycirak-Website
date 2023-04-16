import React from "react";
import "./Rolunk.css";
import "./Rolunk.js";
import { Cikkek } from "../Hirek/Cikkek";
import { Parallax } from "react-scroll-parallax";
const hirek = Cikkek;

const latvanyossagok = [
  {
    name: "Közösségi Ház",
    picture:
      "http://www.kitervezte.hu/images/epuletek/kozossegi-haz-nemesgorzsony/kozossegi-haz-nemesgorzsony_.jpg",
    leiras:
      "A falu központjában található modern épület, amely számos kulturális és szabadidős programot kínál az itt lakóknak. Az épületben található könyvtár, számítógépes terem, sportpálya és színházterem is.",
  },
  {
    name: "Tanösvény",
    picture:
      "https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/21731581_1554704381252305_8928833032808460487_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=h7MkVL2_xdoAX-l20FP&_nc_ht=scontent-vie1-1.xx&oh=00_AfCK6PgO1SSYOHpv7GvilKN_AANw6nzZ1EpMgasPZd_zKA&oe=64631EF0",
    leiras:
      "A falu mellett található erdőben kijelölt tanösvényen lehet kirándulni és a természetet megismerni. A tanösvényen információs táblák segítik az ismeretterjesztést, és bemutatják a helyi növény- és állatvilágot.",
  },
  {
    name: "Falumúzeum",
    picture:
      "https://zalaegerszegturizmus.hu/wp-content/uploads/2017/04/falum%C3%BAzeum-14-1600x1051.jpg",
    leiras:
      "A múzeum a falu régi iskolájában található, és bemutatja a helyi életmódot és kultúrát. Láthatóak itt régi paraszti eszközök, ruhák és ételek, valamint képek és dokumentumok a falu történelméről.",
  },
  {
    name: "Vár",
    picture:
      "https://i.ibb.co/LpR9mm1/DALL-E-2023-04-16-08-50-32-a-castle-on-a-hill-near-a-hungarian-village.png",
    leiras:
      "A közeli Füzér vára a legközelebbi történelmi városrész, amely látogatható Nagycirákból. A vár 14. századi eredetű, és ma múzeumként üzemel. A várról lenyűgöző kilátás nyílik a környező hegyekre és völgyekre.",
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
                top: `${document.getElementById("rolunkDiv").offsetTop}`,
                left: "0",
              })
            }
          >
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://www.nkp.hu/tankonyv/foldrajz_8/img/2/2_1_4jobb_DSC_0066_Slez%E2%80%A0k_Ilona.jpg?max_width=2048)",
              }}
            />

            <h1>rólunk</h1>
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
                  "url(https://csodalatosbalaton.hu/wp-content/uploads/2021/08/tucsokdomb-kilato-nemesvita-csodalatosbalaton-turazas-magyarorszag-bringazas2.jpg)",
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
                  "url(https://zsido.com/files/2021/02/newspapers-istock-1165186939-1586356097.jpg)",
              }}
            />
            <h1>hírek</h1>
          </div>
          <div className="categoryBlob">
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://turizmus.com/html/data/cikk/116/7198/cikk_1167198/Spittelberg_Foto_Mediadesign_ReinhardPodolsky.jpg)",
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
        <div
          style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
          id="rolunkDiv"
        >
          <img
            width="100%"
            height="400px"
            src="https://www.travelandleisure.com/thmb/316_vo4gdOUTHB4ViB2s730kscY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/telluride-colorado-BESTSMALL0121-22f286c59f7d4077ad15f9359497219f.jpg"
          />
          <h2>
            Nagycirák vagyunk, közepes méretű város vagy bács-kiskun megyébe.
            Bács-kiskun legélhetőb városa címe büszke tulajodnosai vagyunk.
            Folyamatason növekszünk és növekszik az iparunk, a gyors
            növekedésünk ellenébe komolyan vesszük a hagyomány megörzést.
          </h2>
          <div>
            <h1>Testvértelepülésünk: </h1>
            <h2>
              Nagycirák testvér települése a közepes-cirák. A két település
              egymástól kb 7km-re helyeszkednek el. A kapcsolat eredetileg
              1926-ban jött létre, amikor a két település egymás ellen
              játszottak régionális foci mecset, ebből készítettek tradíciót
              ahol, minden évbe egyszer játszanak egy mecset egymással.
            </h2>
          </div>
          <img
            width="100%"
            height="400px"
            src="https://ocdn.eu/pulscms-transforms/1/db-ktkqTURBXy9mMDU2NjIwZmIxNTg1ZTU1MjRkOWIyMjlkNTVjMTZhYi5qcGVnkpUDAMyLzQ_tzQj1lQLNBLAAwsM"
          />
          <img
            width="100%"
            height="400px"
            src="https://www.waste360.com/sites/waste360.com/files/womeninwaste.png"
          />
          <div>
            <h1>Problémáink: </h1>
            <h4>
              Nagycirák jelenlegi fő problémája a szemétszállítás, nincs elég
              kapacitása a városnak a megnöveketdett szemétmenyiség
              feldologzásához. A limitált kapacitás miatt az önkormányzat
              dolgozik olyan programon amely nagy felújításokat hajtana végig a
              szemétfeldolgozás folyamatában. A szemétszállításon kívül a
              közbiztonság is egy probléma Nagycirák bizonyos környékein. Még
              nincs teljesen kiépítve rendőrségi hálózat bizonyos ipari
              negyedben, az önkormányzat nem tudja az ipari negyedek
              fejlődésével tartani a tempót. A város egy problémája a buszok
              hiánya, a mostani buszoknak a fentartása nagyon drága és nem
              profitáblis. Az önkormányzat azon dolgozik, hogy a régi busz
              flotát lecserélik új hibrid buszokra. Továbbá tervezünk
              terjeszkedni a mezőgazdasági iparba, a jó természeti
              körülyményeknek köszönhetően
            </h4>
          </div>
          <div>
            <h1>Jövőképünk: </h1>
            <h2>
              Mint egy város, az a célunk, hogy minél nagyobra nőjünk. Ezt úgy
              tervezzük elérni, hogy építünk több házat, hogy ne legyen túl
              drága Nagycirákra költözni, csökkentsük az ingatlanárakat.
              Tervezzük az iparűzési adót csökkenti, hogy több céget tudjunk a
              városba vonzani. A jövőbe be szeretnénk vezetni több
              családtámogatási programot.
            </h2>
          </div>
          <img
            width="100%"
            height="400px"
            src="https://www.milwaukeeindependent.com/wp-content/uploads/2019/09/082919_Suburbannation_01.jpg "
          />
          <img
            width="100%"
            height="400px"
            src="https://www.yamahamotogp.com/showImg/16_highlights/1226839553.jpg"
          />
          <div>
            <h1>Híres szülöttünk: </h1>
            <h2>
              Nagycirák leghíresebb személyeaz .... aki MotoGP versenyző volt.
              1998-ban született Nagycirák külvárosában, kisgyerekként is imádta
              ropni az utcaköröket a bringáján. Amikor szülei vettek neki egy
              motort, akkor tetszett meg neki igazán. Csak ritkán versenyzett,
              de 2016-ban elkezdte a professzionális karrierjét, és 2017-re
              bekerült a MotoGP-be. Háromszor lett európai bajnok, majd 2023-ban
              visszavonult a versenyzéstől.
            </h2>
          </div>
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
            URGENT HÍR: 2 ÓRÁRA ELTŰNT A NAGYCIRÁKI CICA
          </marquee>
          <div style={{ display: "flex" }}>
            {hirek.map((value, key) => {
              return (
                <div key={key} style={{ marginLeft: "20px" }}>
                  <img
                    src={value.picture}
                    style={{ width: "350px", height: "150px" }}
                  />
                  <h2
                    className="hirNev"
                    onClick={() =>
                      (window.location.pathname = `/hirek/?name=${encodeURIComponent(
                        `${value.name}`
                      )}`)
                    }
                  >
                    {value.name}
                  </h2>
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
