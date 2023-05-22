import React from "react";
import "./Onkormanyzat.css";

const bizottsagok = [
  {
    name: "Pénzügyi és költségvetési",
    picutre:
      "https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/6/44792/files/2017/04/stock-market-3-21gyd1b.jpg",
  },
  {
    name: "Népjóléti és Oktatási",
    picutre:
      "https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=",
  },
  {
    name: "Idegenforgalom, Kulturális és Sport",
    picutre:
      "https://media.gettyimages.com/id/1206113166/photo/goal-celebration.jpg?s=612x612&w=gi&k=20&c=KxB7MsW95gBcRhPSawdLzv-6iQX3YMPnNyPUb2Yac60=",
  },
  {
    name: "Településfejlesztés, Közlekedés és Környezetvédelem",
    picutre: "https://s.24.hu/app/uploads/2021/08/varazskorforgalom.jpg",
  },
];

const civilSzervezetek = [
  {
    vezeto: "Asztalos Dávid Péter",
    cim: "Vitorlás Klub",
    leiras: `A Nagycirák vitorlás klub egy nonprofit szervezet, amely a lakosoknak van fenntartva. A vitorlás klub a Duna partján helyeszkedik el és nagycirák egyik fő attrakciója.

A klub eredetileg 1912-ben lett megalapítva azzal a célal, hogy egy nagyobb közösségnek elérhető legyen a vitorlázás és egyéb vizisportok. Az egyesület az évek során rengeteget fejlődött, kitágították a kikötőt és vásároltak új hajókat. A klubnak vannak régi tradiciói, például a szezon nyitó/záró versenyek és a havonta tartott regatták. 

A klub nonprofit módon operál, mindenkinek kell fizetni egy kis tagdíjat, a klubnak a veszteségét a helyi önkormányzat kárpótolja. A klub továbbá szokott szervezni jótékonysági versenyeket-`,
  },
  {
    vezeto: "Papp Kolos",
    cim: "Zöld Nagycirák",
    leiras: `A Zöld Nagycirák egy olyan civil szervezet, amelynek célja, hogy javítsa a környezeti helyzetet a városukban. Az alapítók úgy vélik, hogy kis változtatások is jelentős hatással lehetnek a környezetre, és ezáltal az emberek életminőségére is.
    A szervezet tagjai főként helyi lakosokból állnak, akik önkéntes alapon dolgoznak a környezetvédelem terén. A Zöld Nagycirák számos tevékenységet szervez, mint például a közösségi szemétszedést, a környezetbarát termékek használatának népszerűsítését, vagy az élelmiszerpazarlás elleni küzdelmet.
    A szervezetnek fontos célja, hogy növelje a helyi lakosság környezettudatosságát, és tudatosabbá tegye őket a mindennapi életük során. Emellett a Zöld Nagycirák támogatja a megújuló energiaforrások használatát és az energiahatékonyságot, hogy a város minél kevesebb környezeti terheléssel működjön.
    A szervezet tagjai rendszeresen egyeztetnek a helyi önkormányzattal és más szervezetekkel, hogy közösen dolgozzanak a környezetvédelemért. A Zöld Nagycirák célja, hogy Nagycirák egy élhetőbb és egészségesebb hely legyen mind a jelen, mind pedig a jövő generációi számára.`,
  },
  {
    vezeto: "Kupa-Kovács Barnabás",
    cim: "Nagycirák Két Keréken",
    leiras: `Nagycirák két keréken egy bicajozást támogató civil szervezet. A céljuk a biciklisek számát megnövelni. Számos dolgokkal foglalkoznak, kampányokat rendeznek, javaslatokat tesznek a kerékpáros infrastruktúra kiépítéséhez. Szerveznek  charity versenyeket, mint a Nagycirák vitorlás klubb, és rendszeresen szerveznek egyéb versenyeket. Ez a civilszervezet is non-profit módon operál, nem kell tagságot fizetni, hanem a kormány támogatja a szervezte intézkedéseit.
    Ez a civilszervezet azért annyira fontos, mert támogatja a mozgást és csökkentje az autósok mennyiségét. Tradíció része évente egyszer szervezni egy nagy túrát amely Nagycirák utcáin keresztül átmegy. A bicajos szervezet próbál környezetbarát lenni, ezzel az jön, hogy támogatják az autók kitiltását városokból és lobiznak bicajos sávok éppítéséért.`,
  },
];

export const Onkormanyzat = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "0",
          top: "100px",
        }}
      >
        {bizottsagok.map((value, key) => {
          return (
            <div style={{ width: "25%" }} key={key}>
              <div
                style={{
                  backgroundImage: `url(${value.picutre})`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location.href += `/${encodeURIComponent(value.name)}`)
                }
                className="blur"
              ></div>
              <h1
                style={{
                  zIndex: "1",
                  //transform: "translate(0%, -150%)",
                  color: "black",
                  fontSize: "35px",
                }}
              >
                {value.name}
              </h1>
            </div>
          );
        })}
      </div>
      <h1 style={{ marginTop: "100px" }}>Civil szervezetek</h1>
      <div style={{ marginTop: "200px" }}>
        {civilSzervezetek.map((szervezet, key) => {
          return (
            <div key={key}>
              <h1>{szervezet.cim}</h1>
              {szervezet.leiras.split("\n").map((bekezdes, bekezdesKey) => {
                return (
                  <p
                    style={{ width: "50%", transform: "translate(50%)" }}
                    key={bekezdesKey}
                  >
                    {bekezdes}
                  </p>
                );
              })}
              <footer>Vezető: {szervezet.vezeto}</footer>
            </div>
          );
        })}
      </div>
    </div>
  );
};
