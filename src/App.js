import "./App.css";
import Intro from "./Component/Intro";
import Game from "./Component/gameSection";

import Characters from "./Component/Characters";
import LiveDemo from "./Component/liveDemo";
import OurTeam from "./Component/ourTeam";
import AboutZelda from "./Component/aboutZeld";
import { Grid } from "@mui/material";
import AmerEssaLogo from "./Assets/AmerEssalogo_transparent.png";
function App() {
  return (
    <div className="App">
      <Intro />
      <AboutZelda />
      <Game />
      <Characters />
      <LiveDemo />
      <OurTeam />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item justifyContent="center" alignItems="center">
          <h4
            style={{ fontFamily: "Lora", fontWeight: "1000", color: "white" }}
          >
            Created By
          </h4>
        </Grid>
        <Grid item>
          <img
            src={AmerEssaLogo}
            style={{ width: "150px", height: "150px" }}
            alt="AmerEssaLogo"
            onClick={() => {
              window.open("https://aameressa.netlify.app", "_blank");
            }}
          />
        </Grid>
      </Grid>
      <div style={{ padding: 5 }}>
        <h5 style={{ color: "white" }}>©Zelda</h5>
      </div>
    </div>
  );
}

export default App;
