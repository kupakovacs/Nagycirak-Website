import React from "react";
import { Cikkek } from "./Cikkek";

export const Hirek = () => {
  var qMark = encodeURIComponent("?");
  var cikkNev = decodeURIComponent(
    window.location.pathname.split(qMark)[1]
  ).split("name=")[1];

  var kivalasztottCikk;

  Cikkek.forEach((cikk) => {
    if (cikk.name == cikkNev) {
      kivalasztottCikk = cikk;
      return;
    }
  });

  if (!kivalasztottCikk) {
    return (
      <div>
        <h1>404 Cikk nem megtalálva</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "50px",
        justifyItems: "center",
        transform: "translate(-50%)",
        width: "100%",
        display: "grid",
        marginTop: "50px",
      }}
    >
      <button
        style={{ left: "10px", position: "absolute", top: "-50px" }}
        onClick={() => history.back()}
      >
        Vissza
      </button>
      <img
        src={kivalasztottCikk.picture}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <h1>{kivalasztottCikk.name}</h1>
      <div className="cikkDiv" style={{ width: "70%" }}>
        {kivalasztottCikk.article.split("\n").map((value, key) => {
          return (
            <p style={{ fontSize: "17px" }} key={key}>
              {value}
            </p>
          );
        })}
      </div>
      <h2>{`Író: ${kivalasztottCikk.writer}`}</h2>
    </div>
  );
};
