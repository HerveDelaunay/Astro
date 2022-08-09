import Header from '../Header/Header';
import Planet from '../Planet/Planet';
import PlanetStats from '../PlanetStats/PlanetStats';
import './App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import data from '../../assets/data.json'

const App: React.FC = () => {
  const [planet, setPlanet] = useState<number>(0)
  const [internalStructure, setInternalStructure] = useState<boolean>(false)
  const [surfaceGeology, setSurfaceGeology] = useState<boolean>(false)
  const [overview, setOverview] = useState<boolean>(true)
  const slug = window.location.pathname.slice(1)

  useEffect(() => {
    if(planet) return
    const slugToIndex = data.findIndex((planet) => planet.name === slug)
    setPlanet(slugToIndex)
  }, [slug])
  
  return (
    <div className="App">
       <Header setPlanet={setPlanet} 
          planetId={planet} 
          setInternalStructure={setInternalStructure} 
          setSurfaceGeology={setSurfaceGeology}
          setOverview={setOverview}
        />
      <Routes>
        <Route path='/' element={
          <>
            <Planet planetId={planet} 
              internalStructure={internalStructure} 
              setInternalStructure={setInternalStructure} 
              surfaceGeology= {surfaceGeology} 
              setSurfaceGeology={setSurfaceGeology}
              overview={overview}
              setOverview={setOverview}
            />
            <PlanetStats planetId={planet}/>
          </>
        }/>
        <Route path={`${data[planet].name}`} element={
          <>
            <Planet planetId={planet} 
              internalStructure={internalStructure} 
              setInternalStructure={setInternalStructure} 
              surfaceGeology= {surfaceGeology} 
              setSurfaceGeology={setSurfaceGeology}
              overview={overview}
              setOverview={setOverview}
            />
            <PlanetStats planetId={planet}/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
