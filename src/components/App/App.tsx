import Header from '../Header/Header';
import Planet from '../Planet/Planet';
import PlanetStats from '../PlanetStats/PlanetStats';
import './App.scss';
import { useState } from 'react';

const App: React.FC = () => {
  const [planet, setPlanet] = useState<number>(0)
  const [internalStructure, setInternalStructure] = useState<boolean>(false)
  const [surfaceGeology, setSurfaceGeology] = useState<boolean>(false)
  const [overview, setOverview] = useState<boolean>(true)

  return (
    <div className="App">
      <Header setPlanet={setPlanet} 
        planetId={planet} 
        setInternalStructure={setInternalStructure} 
        setSurfaceGeology={setSurfaceGeology}
        setOverview={setOverview}
        />
      <Planet planetId={planet} 
        internalStructure={internalStructure} 
        setInternalStructure={setInternalStructure} 
        surfaceGeology= {surfaceGeology} 
        setSurfaceGeology={setSurfaceGeology}
        overview={overview}
        setOverview={setOverview}
        />
      <PlanetStats planetId={planet}/>
    </div>
  );
}

export default App;
