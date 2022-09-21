import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

function Profile() {
  const [mypics, setPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPics(result.mypost);
      });
  }, []);

  console.log("mypics", mypics);

  return (
    <div style={{ maxWidth: "700px", margin: "0px auto" }}>
      <div
        style={{
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{
                width: "150px",
                borderRadius: "80px",
                objectFit: "cover",
              }}
              src={state?.pic}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>{state?.name}</h4>
            <h5>{state?.email}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>{mypics.length} posts</h6>
              <h6>{state ? state.followers.length : "0"} followers</h6>
              <h6>{state ? state.following.length : "0"} following</h6>
            </div>
          </div>
        </div>

        <div className="file-field input-field" style={{ margin: "10px" }}>
          <div className="btn #64b5f6 blue darken-1">
            <span>Update pic</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>
      <div className="gallery">
        {mypics?.map((item) => {
          return (
            <img
              key={item._id}
              style={{ margin: "10px" }}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
