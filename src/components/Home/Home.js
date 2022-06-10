import React from "react";

const Home = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        // zIndex: 9999,
        top: 0,
        left: 0,
        flexDirection: "row",
        height: "130px",
        marginTop: "5em",
        textAlign: "left",
        backgroundColor: "blue",
      }}
    >
      <h3
        style={{
          fontFamily: "Roboto Mono, monospace",
          marginLeft: "3em",
          marginTop: "2em",
          marginBottom: "0em",
        }}
      >
        Fall River
      </h3>
      <h1 style={{ marginTop: "0px", marginLeft: "4em" }}>Creative</h1>
    </div>
  );
};

export default Home;
