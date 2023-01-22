import "./App.css";
import Intro from "./Component/Intro";
import Game from "./Component/gameSection";

import Characters from "./Component/Characters";
import LiveDemo from "./Component/liveDemo";

function App() {
  return (
    <div className="App">
      <Intro />

      <Game />
      <Characters />
      <LiveDemo />
    </div>
  );
}

export default App;
