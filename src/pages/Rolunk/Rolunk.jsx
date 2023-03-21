import React from "react";
import "./Rolunk.css";
import "./Rolunk.js";

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
          <div className="categoryBlob" style={{ marginLeft: "5%" }}>
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
            />
            <h1>önkormáyztaunk</h1>
          </div>

          <div className="categoryBlob">
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
            />
            <h1>látványosságok</h1>
          </div>
          <div className="categoryBlob">
            <div
              className="imageBlob"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
              }}
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
        <h1>Önkormáyztaunk:</h1>
        <div
          style={{ display: "grid", gridAutoColumns: "25% 25% 25% 25%" }}
        ></div>
      </div>
    </div>
  );
};
