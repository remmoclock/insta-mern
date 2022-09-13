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
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                objectFit: "cover",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjDEtcR8DzNhRirIEGG-Z5hOCY_TaFwv8lt-5rOQUPscxftGRQJtFdpdZBd3Qma69O00&usqp=CAU"
            />
          </div>
          <div>
            <h4>{state?.name}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>92 posts</h6>
              <h6>12 followers </h6>
              <h6>21 following</h6>
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
          return <img key={item._id} className="item" src={item.photo} alt={item.title} />;
        })}
      </div>
    </div>
  );
}

export default Profile;
