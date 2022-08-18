import Header from "../Header/Header";
import Planet from "../Planet/Planet";
import PlanetStats from "../PlanetStats/PlanetStats";
import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "../../assets/data.json";
import MobileMenu from "../MobileMenu/MobileMenu";

const App: React.FC = () => {
  const [planet, setPlanet] = useState<number>(0);
  const [internalStructure, setInternalStructure] = useState<boolean>(false);
  const [surfaceGeology, setSurfaceGeology] = useState<boolean>(false);
  const [overview, setOverview] = useState<boolean>(true);
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
  const slug = window.location.pathname.slice(1);

  useEffect(() => {
    if (planet) return;
    if (window.location.pathname === "/") {
      setPlanet(0);
      return;
    }
  });

  return (
    <div className={`App ${mobileMenuOpened && "App--mobile"}`}>
      <Header
        setPlanet={setPlanet}
        planetId={planet}
        setInternalStructure={setInternalStructure}
        setSurfaceGeology={setSurfaceGeology}
        setOverview={setOverview}
        mobileMenuOpened={mobileMenuOpened}
        setMobileMenuOpened={setMobileMenuOpened}
      />
      {mobileMenuOpened ? (
        <MobileMenu
          setMobileMenuOpened={setMobileMenuOpened}
          planetId={planet}
          setPlanet={setPlanet}
        />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Planet
                  setPlanet={setPlanet}
                  planetId={planet}
                  internalStructure={internalStructure}
                  setInternalStructure={setInternalStructure}
                  surfaceGeology={surfaceGeology}
                  setSurfaceGeology={setSurfaceGeology}
                  overview={overview}
                  setOverview={setOverview}
                />
                <PlanetStats planetId={planet} />
              </>
            }
          />
          <Route
            path=":slug"
            element={
              <>
                <Planet
                  setPlanet={setPlanet}
                  planetId={planet}
                  internalStructure={internalStructure}
                  setInternalStructure={setInternalStructure}
                  surfaceGeology={surfaceGeology}
                  setSurfaceGeology={setSurfaceGeology}
                  overview={overview}
                  setOverview={setOverview}
                />
                <PlanetStats planetId={planet} />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
