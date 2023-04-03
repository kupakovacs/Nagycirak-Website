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

export const Onkormanyzat = () => {
  return (
    <div
      style={{ display: "flex", position: "absolute", left: "0", top: "100px" }}
    >
      {bizottsagok.map((value, key) => {
        return (
          <div style={{ width: "25%" }} key={key}>
            <div
              style={{
                backgroundImage: `url(${value.picutre})`,
                backgroundSize: "cover",
              }}
              className="blur"
            ></div>
            <h1
              style={{
                color: "white",
                zIndex: "1",
                //transform: "translate(0%, -150%)",
                color: "orange  ",
                fontSize: "40px",
              }}
            >
              {value.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
