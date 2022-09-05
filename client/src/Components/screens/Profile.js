import React from "react";

function Profile() {
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
            <h4>Mario</h4>
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
        <img
          className="item"
          src="https://mobilesyrup.com/wp-content/uploads/2021/04/super-mario-party-scaled.jpg"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1PAys9jfEnH_P1x51l2O9cMpoJYTO0StjJToXoFslxARByADcj7AFYTp2QG8zirrySo&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBM09MW7gO_i1jcIwKItCDpwNgxzMhwrFhvt9xjW9invW2brIFQiiEK8AcQ1EJXc3v7Y&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://mobilesyrup.com/wp-content/uploads/2021/04/super-mario-party-scaled.jpg"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1PAys9jfEnH_P1x51l2O9cMpoJYTO0StjJToXoFslxARByADcj7AFYTp2QG8zirrySo&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBM09MW7gO_i1jcIwKItCDpwNgxzMhwrFhvt9xjW9invW2brIFQiiEK8AcQ1EJXc3v7Y&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://mobilesyrup.com/wp-content/uploads/2021/04/super-mario-party-scaled.jpg"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1PAys9jfEnH_P1x51l2O9cMpoJYTO0StjJToXoFslxARByADcj7AFYTp2QG8zirrySo&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBM09MW7gO_i1jcIwKItCDpwNgxzMhwrFhvt9xjW9invW2brIFQiiEK8AcQ1EJXc3v7Y&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://mobilesyrup.com/wp-content/uploads/2021/04/super-mario-party-scaled.jpg"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1PAys9jfEnH_P1x51l2O9cMpoJYTO0StjJToXoFslxARByADcj7AFYTp2QG8zirrySo&usqp=CAU"
          alt=""
        />
        <img
          className="item"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBM09MW7gO_i1jcIwKItCDpwNgxzMhwrFhvt9xjW9invW2brIFQiiEK8AcQ1EJXc3v7Y&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Profile;
