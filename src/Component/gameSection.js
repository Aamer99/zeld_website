import React from "react";
import "../App.css";
import { useInView } from "react-intersection-observer";
import Grid from "@mui/material/Grid";

import Grow from "@mui/material/Grow";
import { games } from "../data/games";
import { useTransition, animated } from "react-spring";

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
                  paddingLeft: 10,
                }}
              >
                Games:
              </h1>
            </Grid>
            <Grid>
              <h4
                style={{
                  paddingBottom: 100,
                  paddingLeft: 50,
                  color: "#808080",
                  fontFamily: "Tajawal",
                  fontSize: 20,
                }}
              >
                play games and wine to earn jewelry and buy characters{" "}
              </h4>
            </Grid>

            <Grid
              container
              spacing={4}
              style={{
                justifyContent: "center",
                display: "flex",
                paddingLeft: "10%",
              }}
            >
              <Grid spacing={{ xs: 3, md: 10 }} container direction="row">
                {transition((style, item) =>
                  item ? (
                    <animated.div style={style}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{ padding: 10 }}
                      >
                        <Grid item>
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
                        </Grid>

                        {/* <Grid
                        item
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <div style={{ width: 50, height: 50, padding: 5 }}>
                          <CircularProgressbarWithChildren
                            value={item.brainValue}
                          >
                            <img
                              style={{ width: 20 }}
                              src={item.brain}
                              alt="brain"
                            />
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ width: 50, height: 50, padding: 5 }}>
                          <CircularProgressbarWithChildren
                            value={item.powerValue}
                          >
                            <img
                              style={{ width: 20 }}
                              src={item.power}
                              alt="power"
                            />
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ width: 50, height: 50, padding: 5 }}>
                          <CircularProgressbarWithChildren
                            value={item.hartValue}
                          >
                            <img
                              style={{ width: 20 }}
                              src={item.hart}
                              alt="hart"
                            />
                          </CircularProgressbarWithChildren>
                        </div>
                      </Grid> */}
                      </Grid>
                    </animated.div>
                  ) : (
                    ""
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grow>
    </section>
  );
}

export default Game;
