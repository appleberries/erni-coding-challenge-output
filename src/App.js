import './App.css'
import { useState } from "react";
import AreaEntrance from "./components/AreaEntrance";

const App = () =>{
  const areas = ['Area A', 'Area B', 'Area C']
  const [active, setActive] = useState("")

  const handleAreaClick = (area) =>{
    setActive(area)
  }

  return (
    <div className="main-app">
      {active === "" ? 
        <div>
          <h3>Welcome to Object-Oriented Mall!</h3>
          <p>Where would you like to park?</p>
          {areas.map(area => <button key={area} onClick={() => handleAreaClick(area)}>{area}</button>)}
        </div>
      : null}

      {active === "Area A" && <AreaEntrance name="Area A"/>}
      {active === "Area B" && <AreaEntrance name="Area B"/>}
      {active === "Area C" && <AreaEntrance name="Area C"/>}
    </div>
  );
}

export default App;
