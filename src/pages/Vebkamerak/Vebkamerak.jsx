import React from "react";
import bumm from "./bumm.mp4";

export const Vebkamerak = () => {
  const resizeVideo = () => {
    var video = document.getElementById("webcamVideo");
    video.width = video.style.width;
    video.height = video.style.height;
  };

  return (
    <div>
      <video
        id="webcamVideo"
        style={{ width: "1200px", height: "100%" }}
        src={bumm}
        autoPlay={true}
        //onLoad={resizeVideo}
      ></video>
    </div>
  );
};
