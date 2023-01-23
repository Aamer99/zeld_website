import React from "react";
import "../App.css";
import { useInView } from "react-intersection-observer";
import Grid from "@mui/material/Grid";

import Grow from "@mui/material/Grow";
import { characters } from "../data/charter";
import { useTransition, animated } from "react-spring";
import "react-circular-progressbar/dist/styles.css";

function AboutZelda() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const transition = useTransition(characters, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: 0, opacity: 1, delay: item.delay }),
    reset: !inView,
  });
  return (
    <section ref={ref}>
      <Grow in={inView} {...(inView ? { timeout: 800 } : {})}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid>
            <h1
              style={{
                color: "#808080",
                fontFamily: "Alkalami",
                fontSize: 40,
                paddingLeft: "20px",
              }}
            >
              What is Zelda?
            </h1>
          </Grid>
          <Grid>
            <h4
              style={{
                paddingBottom: 100,
                paddingLeft: 50,
                color: "#808080",
                fontFamily: "Titillium Web",
                fontSize: 30,
                paddingRight: 50,
              }}
            >
              it is a gaming app that has more than 5 games (XO - Snake - Puzzle
              - memory game - Lodo star - Chess). the player can login by email
              and password or Google or Facebook. when the user signup there 4
              games are open and one character. if he wants to open more
              characters he needs to collect more jewelry. Also, there are top
              players in the game and the players can chat with each other
            </h4>
          </Grid>
        </Grid>
      </Grow>
    </section>
  );
}

export default AboutZelda;
