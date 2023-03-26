import React, { useEffect, useState } from "react";

export const Statisztika = () => {
  const [nepesseg, setNepesseg] = useState();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/api");

    socket.addEventListener("message", (event) => {
      setNepesseg(event.data);
    });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Statisztika</h1>
      {nepesseg ? <p>{nepesseg}</p> : <p>loading</p>}
    </div>
  );
};
