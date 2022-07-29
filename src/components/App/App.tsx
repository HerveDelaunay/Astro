import Header from '../Header/Header';
import Planet from '../Planet/Planet';
import './App.scss';
import { useState } from 'react';

function App() {
  const [planet, setPlanet] = useState<number>(0)

  return (
    <div className="App">
      <Header setPlanet={setPlanet}/>
      <Planet planetId={planet}/>
    </div>
  );
}

export default App;
