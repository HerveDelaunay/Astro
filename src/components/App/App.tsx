import Header from '../Header/Header';
import Planet from '../Planet/Planet';
import './App.scss';
import { useState } from 'react';

function App() {
  const [planet, setPlanet] = useState<number>(0)
  const [planetClass, setplanetClass] = useState("Mercure")

  return (
    <div className="App">
      <Header setPlanet={setPlanet} setPlanetClass={setplanetClass} planetId={planet}/>
      <Planet planetId={planet}/>
    </div>
  );
}

export default App;
