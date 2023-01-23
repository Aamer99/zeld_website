import React from "react";
import "../App.css";
import { useInView } from "react-intersection-observer";
import Grid from "@mui/material/Grid";
import charactersImage from "../Assets/charactersScreen.png";
import Grow from "@mui/material/Grow";
import { characters } from "../data/charter";
import { useTransition, animated } from "react-spring";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

export default function Characters() {
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
        <div className="Slide" id="skills">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <h1
                style={{
                  color: "#808080",
                  fontFamily: "Alkalami",
                  fontSize: 40,
                  paddingLeft: "20px",
                  paddingBottom: 100,
                }}
              >
                Characters:
              </h1>
            </Grid>
            {/* <Grid>
              <h4
                style={{
                  paddingBottom: 100,
                  paddingLeft: 50,
                  color: "#808080",
                  fontFamily: "Tajawal",
                  fontSize: 20,
                  paddingRight: 50,
                }}
              >
                play games and wine to earn jewelry and buy characters{" "}
              </h4>
            </Grid> */}
            <Grid container>
              <Grid
                item
                container
                md={6}
                xs={12}
                // style={{
                //   justifyContent: "center",
                //   display: "flex",
                //   paddingLeft: "15%",
                // }}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
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
                              width: "150px",
                              height: "150px",
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

                        <Grid
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
                        </Grid>
                      </Grid>
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
                  <img src={charactersImage} width={700} />
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grow>
    </section>
  );
}
