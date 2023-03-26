import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Rolunk } from "./pages/Rolunk/Rolunk.jsx";
import { Tortenelem } from "./pages/Tortenelem/Tortenelem.jsx";
import { Vebkamerak } from "./pages/Vebkamerak/Vebkamerak.jsx";
import { Hirek } from "./pages/Hirek/Hirek.jsx";
import { Statisztika } from "./pages/Statisztika/Statisztika.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route path="rolunk" element={<Rolunk />} />
            <Route path="tortenelem" element={<Tortenelem />} />
            <Route path="vebcam" element={<Vebkamerak />} />
            <Route path="statisztika" element={<Statisztika />} />
            <Route path="hirek/:hirNev" element={<Hirek />} />
            <Route index element={<Rolunk />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
