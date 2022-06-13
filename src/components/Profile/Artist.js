import React from "react";
import BorderCard from "./../common/BorderCard";

const Artist = (props) => {
  const { id, fname, lname, media } = props.artist;
  return (
    <BorderCard>
      <h2>{fname}</h2>
      <h2>{lname}</h2>
      <p>{media}</p>
    </BorderCard>
  );
};

export default Artist;
