import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Rolunk } from "./pages/Rolunk/Rolunk.jsx";
import { Tortenelem } from "./pages/Tortenelem/Tortenelem.jsx";
import { Vebkamerak } from "./pages/Vebkamerak/Vebkamerak.jsx";
import { Hirek } from "./pages/Hirek/Hirek.jsx";
import { Statisztika } from "./pages/Statisztika/Statisztika.jsx";
import { Terkep } from "./pages/Terkep/Terkep.jsx";
import { Onkormanyzat } from "./pages/Onkormanyzat/Onkormanyzat.jsx";
import { SpecifikusOnkormanyzat } from "./pages/Onkormanyzat/SpecifikusOnkormanyzat.jsx";

const paths = [
  { path: "/rolunk", element: <Rolunk /> },
  { path: "/tortenelem", element: <Tortenelem /> },
  { path: "/vebcam", element: <Vebkamerak /> },
  { path: "/statisztika", element: <Statisztika /> },
  { path: "/hirek/:", element: <Hirek /> },
  { path: "/terkep", element: <Terkep /> },
  { path: "/", element: <Rolunk /> },
  { path: "/onkormanyzat", element: <Onkormanyzat /> },
  {
    path: "/onkormanyzat/:onkormanyzatnev",
    element: <SpecifikusOnkormanyzat />,
  },
];

function App() {
  return (
    <>
      <NavBar />
      {paths.map((path, key) => {
        console.log(window.location.pathname);
        if (path.path == window.location.pathname) {
          return <div key={key}>{path.element}</div>;
        } else if (
          window.location.pathname.startsWith(path.path.split(":")[0]) &&
          path.path.includes("/:")
        ) {
          console.log("meow ");
          return <div key={key}>{path.element}</div>;
        }
      })}
    </>
  );
}

export default App;
