import React from "react";
import banner from "../../assets/banner.jpg";
import landing from "../../assets/landing.jpg";
import Splash from "../Splash/Splash";
import TextArea from "../common/TextArea";

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
      <p style={{ marginTop: "10em" }}>
        Fall River is a hub of arts and culture on the south coast of
        Massachusetts, boasting a wide array of attractions and diverse venues
        that showcase the history, art, and culture. The city is home to
        hundreds of artists and performers who contribute to our distinctive
        identity, economic development, and the quality of life of everyone
        living in and visiting the city. This Creative Directory is a resource
        to connect you to the talented people who contribute to the arts and
        culture of Fall River.
      </p>
      <div>
        <p>
          It’s free to join the Fall River Creative Directory! If you are
          someone who works, lives, exhibits, performs, volunteers or
          contributes in any other way to the arts, culture or the creative
          economy in the city of Fall River, this directory is for you. This is
          the list we use to promote on our social media throughout the year.
        </p>
      </div>
    </div>
  );
};

export default Home;
