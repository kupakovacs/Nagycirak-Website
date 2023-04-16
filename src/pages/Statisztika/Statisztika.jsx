import React, { useEffect, useState } from "react";

export const Statisztika = () => {
  const grafikonok = [
    { cim: "Népesség", kep: `https://i.ibb.co/ykH39LX/N-vtelen-k-p.png` },
    { cim: "Foglalkozás", kep: `https://i.ibb.co/HCMkhxt/Foglalkoztatas.png` },
    { cim: "Kiadások", kep: `https://i.ibb.co/3pZycJK/Koltsegvetes.png` },
    { cim: "Adóbevétel", kep: `https://i.ibb.co/7py5qgV/Adobevete.png` },
    { cim: "Bevándorlás", kep: `https://i.ibb.co/Jy5TKYd/Bevandorlas.png` },
    {
      cim: "Munkahelyek száma",
      kep: `https://i.ibb.co/dbjwH0G/Munkahelyek-szama.png`,
    },
    { cim: "Adók", kep: `https://i.ibb.co/K7ZfB2C/Kiadasok-1.png` },
    { cim: "Költségvetés", kep: `https://i.ibb.co/yydw6Mn/Kiadasok-2.png` },
  ];
  const [nepesseg, setNepesseg] = useState();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/api");

    socket.addEventListener("message", (event) => {
      setNepesseg(event.data);
      console.log(event);
    });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div
      style={{
        top: "40px",
        position: "absolute",
        transform: "translate(-50%)",
      }}
    >
      <h1>Élő Statisztikák</h1>
      {nepesseg ? <p>Népesség: {nepesseg}</p> : <p>Népesség: betöltés...</p>}
      <h1>Grafikonok?</h1>
      {grafikonok.map((grafkon, key) => {
        return (
          <div>
            <h2>{grafkon.cim}</h2>
            <img src={grafkon.kep} />
          </div>
        );
      })}
    </div>
  );
};
