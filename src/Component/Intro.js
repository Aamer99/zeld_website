import React from "react";
import { Grid, Grow, Zoom } from "@mui/material";
import zeldaLogo from "../Assets/logo.png";
import zeldaScrenns from "../Assets/zeldaScreens.png";
import { useSpring, animated } from "@react-spring/web";
import "../App.css";
function Intro() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      style={{
        height: "100vh",
      }}
    >
      <Grid
        item
        justifyContent="center"
        alignItems="center"
        xs={12}
        className="zeldaLogoContainer"
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
        }}
      >
        <Grow in={true} timeout={1000}>
          <img
            src={zeldaLogo}
            alt="AAA"
            height={350}
            width={350}
            className="zeldaLogo"
          />
        </Grow>
      </Grid>
      <Grid
        item
        className="IconContainersHeaderSection"
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
        }}
      >
        <Zoom
          in={true}
          style={{
            transitionDelay: true ? "540ms" : "0ms",
          }}
          className="zeldaScreensContinuer"
        >
          <img src={zeldaScrenns} alt="AAA" />
        </Zoom>
      </Grid>
    </Grid>
  );
}

export default Intro;
