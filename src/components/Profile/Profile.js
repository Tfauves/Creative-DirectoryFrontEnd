import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import { Container } from "@mui/system";
import { Fragment } from "react";
import AdvButton from "../common/AdvButton";

const Profile = (props) => {
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.proId,
  });
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const _fetchOwner = async () => {
      const res = await axios.get(`${apiHost}/api/profile/${owner.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setOwner(res.data);
      setLoading(false);
    };
    setLoading(true);
    _fetchOwner();
  }, []);

  const navigate = useNavigate();
  const displayProfile = () => {
    const onClick = () => {
      navigate("/media");
    };
    return (
      <Fragment>
        <div style={{ marginTop: "3em" }}>
          <div
            style={{
              fontFamily: "Bebas Neue, cursive",
              flex: 2,
              flexDirection: "column",
              color: "#303030",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>{owner.fname.toUpperCase()}</h1>
          </div>
        </div>
        <Container>
          <div>
            <h1
              style={{
                fontFamily: "Bebas Neue, cursive",
                marginTop: "1em",
                textAlign: "center",
                fontSize: "3em",
                letterSpacing: "13px",
                marginBottom: "1em",
                textDecorationLine: "underline",
              }}
            >
              Artist Media
              <AdvButton onClick={onClick}>add media</AdvButton>
              {/* todo need to bring in rest of info */}
            </h1>
            {/* <h2>{owner.media.type}</h2> */}
          </div>
        </Container>
      </Fragment>
    );
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
      {loading ? <Spinner /> : displayProfile()}
    </div>
  );
};
export default Profile;
