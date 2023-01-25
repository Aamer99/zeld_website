import React from "react";
import { APPLMembers } from "../data/APPLMembers";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../App.css";
import { Grid, Grow, IconButton } from "@mui/material";
import { useTransition, animated } from "react-spring";
import circle from "../Assets/circle.png";
import programmer from "../Assets/AmerEssaLogo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Email } from "@mui/icons-material";
function OurTeam() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const transition = useTransition(APPLMembers, {
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
                Developer Team:
              </h1>
            </Grid>
            <Grid
              container
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
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <img
                          src={item.logo}
                          width={100}
                          height={100}
                          style={{ borderRadius: "50%" }}
                        />
                      </Grid>
                      <Grid
                        item
                        style={{ padding: "10px" }}
                        // direction="column"
                        // justifyContent="flex-start"
                        // alignItems="flex-start"
                      >
                        <h3 style={{ color: "white" }}>{item.name}</h3>
                        <h5 style={{ color: "white" }}>{item.description}</h5>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <IconButton
                            style={{ color: "white" }}
                            onClick={() => {
                              window.open(`${item.githubURL}`, "'_blank'");
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                          <IconButton
                            style={{ color: "white" }}
                            onClick={() => {
                              window.open(`${item.linkedInURL}`, "_blank");
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                          <IconButton
                            style={{ color: "white" }}
                            onClick={() => {
                              window.open(`mailto:${item.email}`);
                            }}
                          >
                            <Email />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </animated.div>
                ) : (
                  ""
                )
              )}
            </Grid>
          </Grid>
        </div>
      </Grow>
    </section>
  );
}

export default OurTeam;
