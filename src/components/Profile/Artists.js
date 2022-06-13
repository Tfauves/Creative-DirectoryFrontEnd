import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import Artist from "./Artist";

const Artists = (props) => {
  const [auth] = useContext(AuthContext);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const _getOwners = async () => {
      try {
        const res = await axios.get(`${apiHost}/api/profile`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        console.log(res.data);
        setLoading(false);
        setArtists(res.data);
      } catch (err) {
        console.log(err.response.message);
      }
    };
    setLoading(true);
    _getOwners();
  }, [auth.token]);

  const displayProfiles = () => {
    return artists.map((own) => (
      <Artist owner={own} key={own.id} onSelect={onSelect} />
    ));
  };

  const onSelect = (ownId) => {
    navigate(`/profile/${ownId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Welcome</h1>
      {loading ? <Spinner /> : displayProfiles()}
    </div>
  );
};

export default Artists;
