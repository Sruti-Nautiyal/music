import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./loginPage.css";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [pass, setPass] = useState(true);
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  //if not logged in

  //for getting email value
  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  //for getting pwd value
  const handlePwd = (e) => {
    setPwd(e.target.value);
  };

  //for eye option
  const handleClick = () => {
    setPass(!pass);
  };

  //on submittimg the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, pwd);
    axios
      .post("https://stg.dhunjam.in/account/admin/login", {
        username: username,
        password: pwd,
      })
      .then((result) => {
        console.log(result.data);
        sessionStorage.setItem("id", result.data.data.id);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // sessionStorage;
  sessionStorage.removeItem("id");
  sessionStorage.clear();
  return (
    <div className="container">
      <div className="title">
        <h4 className="heading">Venue Admin Login</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={handleUser}
          required
          className="input-1"
        />
        <input
          type={pass ? "password" : "text"}
          value={pwd}
          name="password"
          placeholder="Password"
          onChange={handlePwd}
          className="input-1"
          required
        />
        <div className="eye">
          {pass ? (
            <FaRegEye onClick={handleClick} />
          ) : (
            <FaRegEyeSlash onClick={handleClick} />
          )}
        </div>

        <button type="submit">Sign in</button>
        <span>New Registration?</span>
      </form>
    </div>
  );
}

export default LoginPage;
