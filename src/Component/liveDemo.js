import React from "react";
import liveDemo from "../Assets/liveDemo.mov";
import { useInView } from "react-intersection-observer";
import { Grid, Grow } from "@mui/material";
function LiveDemo() {
  const [ref, inView] = useInView({ threshold: 0.2 });
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
              Live Demo:
            </h1>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <video
              src={liveDemo}
              autoPlay={inView}
              loop
              muted
              style={{ padding: "20" }}
            />
          </Grid>
        </Grid>
      </Grow>
    </section>
  );
}

export default LiveDemo;
