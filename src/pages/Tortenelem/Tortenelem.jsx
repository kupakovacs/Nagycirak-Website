import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const tortenelemSzoveg = [
  {
    name: "Kezdetek: ",
    descrption: `Egyszer volt, hol nem volt, az bácskis-kun közepén fekvő kis város, amely a középkorban a Kunság szívében helyezkedett el. A település története során több népcsoport is élt ezen a területen, többek között a kunok, akik a honfoglalás során telepedtek le itt, valamint a székelyek, akik a tatárjárás után menekültek ide.

  A város történelmében számos fontos esemény zajlott le. A tatárjárás idején a település jelentős pusztításokat szenvedett, de a helybéliek az épületek újjáépítésével újra virágzóvá tették a várost. Az 1848-as forradalom és szabadságharc idején a város is aktívan részt vett a harcokban, de inkább a sebesültek gyógyításában vettek részt a híres korházukkal.
  `,
    picture:
      "https://i1.wp.com/www.lostkingdom.net/wp-content/uploads/2015/03/Joost_Cornelisz._Droochsloot_-_Village_Street_-_WGA6684.jpg?resize=1080%2C675&ssl=1",
  },
  {
    name: "Világháborúk: ",
    descrption: `Az első világháborúban a városban élők is részt vettek a harcokban, és a háború után a gazdaság lassú növekedésnek indult. A második világháború alatt a településen katonai bázisokat alakítottak ki, és a helyi gazdaság a hadiiparra koncentrált.

    Az 1950-es évektől a település gazdasága átalakult, és a mezőgazdasági tevékenységek kezdték átvenni a vezető szerepet. A városban több gyár is épült, amelyek munkahelyeket teremtettek a helyi lakosság számára. Fejlesztésekkel új iparágakat tártak fel, mint a kőolaj kifejtése.`,
    picture:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/959F/production/_104030383_hi035043057.jpg.webp",
  },
  {
    name: "Jelenkor: ",
    descrption: `A rendszerváltás után a település gazdasága további változásokon ment át, és a helyi ipar hanyatlásnak indult. Gyárakat eltulajdonítottak és minden cég állami kontrolba került.  

    A település demográfiai mutatói kezdetben stagnáltak, de az utóbbi években némi növekedés mutatkozik a beköltözők számának növekedése miatt. A városnak nem igazán gazdag természeti kincse van, de az alacsony adozás és az ipar vonzza az embereket
    
    A város egyik legérdekesebb turisztikai látványossága a bárány simogató stadion, a régi helyi tradició azt diktálja, hogy minden tizenötödik napon báránysimogatásban vesznek részt. Ez a tradició volt ahhoz indíték hogy megépítsék a bárány simogató stadiont.
    
    A városban a fő vallás keresztény, az ott élő embereknek a többsége vallásos. Más vallások is vannak representálva de az kisebbség a keresztényekhez képest.`,
    picture:
      "https://agrokep.vg.hu/wp-content/uploads/2021/10/4105379IMG0993-scaled.jpg",
  },
];

export const Tortenelem = () => {
  return (
    <div
      style={{
        top: "50px",
        position: "absolute",
        width: "100%",
        height: "100%",
        transform: "translate(-50%)",
        marginTop: "50px",
      }}
    >
      {tortenelemSzoveg.map((kor, key) => {
        const SzovegDiv = () => {
          return (
            <div style={{ width: "45%" }}>
              <h1>{kor.name}</h1>
              {kor.descrption.split("\n").map((szoveg, key) => {
                return <p key={key}>{szoveg}</p>;
              })}
            </div>
          );
        };

        const KepDiv = () => {
          return (
            <div style={{ width: "55%", marginTop: "-5px" }}>
              <img
                style={{ width: "100%", borderRadius: "15px" }}
                src={kor.picture}
              />
            </div>
          );
        };

        if (key % 2 == 0) {
          return (
            <div key={key} style={{ display: "flex" }}>
              <SzovegDiv />
              <KepDiv />
            </div>
          );
        } else {
          return (
            <div key={key} style={{ display: "flex" }}>
              <KepDiv />
              <SzovegDiv />
            </div>
          );
        }
      })}
      <div>
        <h1>Nevünk eredete: </h1>
        <div style={{ paddingBottom: "100px" }}>
          <p
            style={{
              fontSize: "18px",
              width: "50%",
              transform: "translate(50%)",
            }}
          >
            A Nagycirák nevet eredetileg a kunok kezdték el használni. Az első
            része a névnek a "nagy" onnan jött, hogy régebben volt mellete egy
            kisebb település, ami a tatárjárás során fel lett égetve, de a
            névelő megmaradt. A névnek a második része a "cirák" egy ősi
            legendából ered, miszerint egy ember egy közeli faluban melátott egy
            aranyos kiscicát, amit minden áron meg akart simogatni. Viszont a
            macska elfutott, az elszánt kalandor pedig futott utána. Végül
            amikor a macska megállt egy folyóparton, és megengedte, hogy
            megcirógassák őt, a férfi annyira örült, hogy ott letelepedett, és
            új életet kezdett, a macskával együtt.
          </p>
        </div>
      </div>
    </div>
  );
};
