import React from "react";
import "./Onkormanyzat.css";

const bizottsagok = [
  {
    name: "Pénzügyi és költségvetési",
    picutre:
      "https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/6/44792/files/2017/04/stock-market-3-21gyd1b.jpg",
    leiras:
      "Az eddigi kemény munkánknak meglett a gyümölcse, városunk nagy bevételtöbbletben van. Mivel ekkora profitban vagyunk, a közeljövőben várható egy nagyobb beruházás, amit az illetékes bizottsággal együttműködésben fogunk csinálni. Továbbá tervezzük csökkenten az iparűzési adót, hogy kedvezőbbek legyenek a feltételek az ideköltöző gyáraknak, továbbá engedélyezzük az olajbánya fejlődését.",
    emberek: [
      {
        nev: "Asztalos Dávid Péter",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Csató Simon",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Vári-Molnár Benedek",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
    ],
  },
  {
    name: "Népjóléti és Oktatási",
    picutre:
      "https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=",
    leiras:
      "Városunk büszke tulajdonosa 2 egyetemnek, és számos általános és középiskolának. Tervbe van már véve egy közösségi könyvtár építése a Nógrádi útra, továbbá fel szeretnénk újítani a Bütler utcai általános iskola földszintjét. ",
    emberek: [
      {
        nev: "Dobos Lili",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Sándor Eszter",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
    ],
  },
  {
    name: "Idegenforgalom, Kulturális és Sport",
    picutre:
      "https://media.gettyimages.com/id/1206113166/photo/goal-celebration.jpg?s=612x612&w=gi&k=20&c=KxB7MsW95gBcRhPSawdLzv-6iQX3YMPnNyPUb2Yac60=",
    leiras:
      "Úgy gondoljuk, hogy sajnos Nagycirákon nincs elég lehetőség sportolásra. Szeretnénk építeni több kültéri sportpályát, többekközt: tenniszpálya, gördeszkapark, úszómedence, és a belvárosban egy építetlen park/mező. Városunk növekedésével arányosan fogunk építeni egyre több látványosságot, hogy különleges legyen Nagycirák, és vonzó legyen turisták számára",
    emberek: [
      {
        nev: "Dolák-Saly Dorka",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Jeney-Schwartz Noel",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Radnai Tünde",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
    ],
  },
  {
    name: "Településfejlesztés, Közlekedés és Környezetvédelem",
    picutre: "https://s.24.hu/app/uploads/2021/08/varazskorforgalom.jpg",
    leiras: `Célunk, hogy a városunk gazdasága kevésbé támaszkodjon a környezetünknek káros iparokra. Továbbá le szeretnénk cseréltetni a szennyvízrendszert, hogy a csatornákból egyenesen kiengednék a Dunába, megszűrnék egy fejlett víztisztító rendszerrel.
    Amint a településünk népessége kb. 100 000 fele emelkedik, tervbe van véve egy kötöttpályás tömegközlekedési vonal, mely összeköti a város külön negyedeit. `,
    emberek: [
      {
        nev: `Kupa-Kovács
        Barnabás`,
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Papp Kolos",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Radó Natasa",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
      {
        nev: "Virga Nóra",
        velemeny: "",
        kep: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      },
    ],
  },
  {
    name: "Jogi és ügyrendi",
    picutre:
      "https://d2r2ijn7njrktv.cloudfront.net/IL/uploads/2021/08/26105122/Judge-hammer.jpg",
  },
];

export const SpecifikusOnkormanyzat = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "30px",
        transform: "translate(-50%)",
      }}
    >
      {bizottsagok.map((bizottsag, key) => {
        if (decodeURIComponent(window.location.href).includes(bizottsag.name)) {
          return (
            <div key={key}>
              <img
                style={{
                  height: "300px",
                  width: "100svw",
                  filter: "blur(5px)",
                }}
                src={bizottsag.picutre}
              ></img>
              <h1>{bizottsag.name + " bizottság"}</h1>
              <p style={{ width: "50svw", transform: "translate(50%)" }}>
                {bizottsag.leiras}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {bizottsag.emberek.map((ember, emberKey) => {
                  return (
                    <div style={{ marginInline: "20px" }}>
                      <img
                        src={ember.kep}
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100%",
                        }}
                      />
                      <h3 style={{ width: "150px" }}>{ember.nev}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
