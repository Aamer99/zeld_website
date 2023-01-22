import React from "react";
import "../App.css";
import { useInView } from "react-intersection-observer";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import Grow from "@mui/material/Grow";
import { games } from "../data/games";
import { useTransition, animated } from "react-spring";
import gamesImage from "../Assets/gamesImage.png";
import { Zoom } from "@mui/material";
function Game() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const transition = useTransition(games, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: 0, opacity: 1, delay: item.delay }),
    reset: !inView,
  });
  return (
    <section ref={ref}>
      <Grow in={inView} {...(inView ? { timeout: 800 } : {})}>
        <div className="Slide" id="skills">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <h1
                style={{
                  color: "#808080",
                  fontFamily: "Alkalami",
                  fontSize: 40,
                  paddingLeft: 10,
                }}
              >
                Games:
              </h1>
            </Grid>

            <Grid container>
              <Grid
                item
                md={6}
                xs={12}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {transition((style, item) =>
                  item ? (
                    <animated.div style={style}>
                      <img
                        src={item.uri}
                        loading="lazy"
                        style={{
                          width: item.alt == "universe" ? "180px" : "160px",
                          height: "160px",
                          margin: 10,
                        }}
                        alt={item.alt}
                      />

                      <h3
                        style={{
                          fontFamily: "Roboto Condensed",
                          color: "white",
                        }}
                      >
                        {item.name}
                      </h3>
                    </animated.div>
                  ) : (
                    ""
                  )
                )}
              </Grid>
              <Grid item md={6} xs={6} className="gamesScreensContinuer">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 5 }}
                >
                  <img src={gamesImage} width={800} />
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grow>
    </section>
  );
}

export default Game;
