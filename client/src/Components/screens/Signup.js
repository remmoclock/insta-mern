import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function Signup() {
  const history = useHistory();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState();

  useEffect(() => {
    if (url) {
      uploadFields();
    }
  }, [url]);
  const uploadPic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "mido92");
    fetch("https://api.cloudinary.com/v1_1/mido92/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const uploadFields = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
        pic: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const PostData = () => {
    if (image) {
      uploadPic();
    } else {
      uploadFields();
    }
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{ marginBottom: "25px" }}>
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          <button
            className="material-icons btn-small waves-effect waves-light #64b5f6 black darken-1"
            onClick={togglePassword}
          >
            {passwordShown ? "visibility" : "visibility_off"}
          </button>
        </div>

        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Upload pic</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>

        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => PostData()}
        >
          Sign Up
        </button>
        <h5>
          <Link to="/signin">Already have an account ? Login</Link>
        </h5>
        <h6>
          <Link to="/reset">Forgot password ?</Link>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
