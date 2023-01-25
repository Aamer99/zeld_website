import "./App.css";
import Intro from "./Component/Intro";
import Game from "./Component/gameSection";

import Characters from "./Component/Characters";
import LiveDemo from "./Component/liveDemo";
import OurTeam from "./Component/ourTeam";
import AboutZelda from "./Component/aboutZeld";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutZelda />
      <Game />
      <Characters />
      <LiveDemo />
      <OurTeam />

      <div style={{ padding: 5 }}>
        <h5 style={{ color: "white" }}>©Zelda</h5>
      </div>
    </div>
  );
}

export default App;
