import React from "react";
import banner from "../../assets/banner.jpg";
import landing from "../../assets/landing.jpg";
import Splash from "../Splash/Splash";
import Text from "./Text";

const Home = () => {
  return (
    <div style={{ marginTop: "30em" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          // zIndex: 9999,
          top: 0,
          left: 0,
          flexDirection: "row",
          height: "130px",
          marginTop: "3em",
          textAlign: "left",
          // backgroundColor: "blue",
        }}
      >
        <Splash image={banner} style={{ height: "15vh" }}>
          <h3
            style={{
              fontFamily: "Roboto Mono, monospace",
              fontStyle: "italic",
              marginLeft: "7.5em",
              marginTop: "2em",
              marginBottom: "0em",
              paddingTop: "3em",
              textShadow: "1px 1px black",
              color: "#f1f1f1",
            }}
          >
            Fall River
          </h3>
          <h1
            style={{
              fontFamily: "Roboto Mono, monospace",
              fontStyle: "italic",
              marginTop: "0px",
              marginLeft: "6em",
              textShadow: "1px 1px black",
              color: "#f1f1f1",
            }}
          >
            Arts and Culture
          </h1>
        </Splash>
      </div>
      <div>
        <Splash
          image={landing}
          style={{ height: "15vh", width: "100%", transform: "rotate(3deg)" }}
        >
          <h1
            style={{
              fontFamily: "Permanent Marker, cursive",
              fontSize: "4em",
              paddingTop: ".5em",
              marginLeft: "3em",
              textShadow: "1px 1px black",
              color: "#f1f1f1",
            }}
          >
            Creative Directory
          </h1>
        </Splash>
      </div>
      <Text />
    </div>
  );
};

export default Home;
