import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Mario</h5>
        <div className="card-image">
          <img
            className=""
            src="https://mobilesyrup.com/wp-content/uploads/2021/04/super-mario-party-scaled.jpg"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Mario</h5>
        <div className="card-image">
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1PAys9jfEnH_P1x51l2O9cMpoJYTO0StjJToXoFslxARByADcj7AFYTp2QG8zirrySo&usqp=CAU"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Mario</h5>
        <div className="card-image">
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBM09MW7gO_i1jcIwKItCDpwNgxzMhwrFhvt9xjW9invW2brIFQiiEK8AcQ1EJXc3v7Y&usqp=CAU"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
}

export default Home;
