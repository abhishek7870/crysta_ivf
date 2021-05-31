import shadows from "@material-ui/core/styles/shadows";
import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function LogIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [token, settoken] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://apidev.crystaivf.com/api/v1/auth/users/login/", {
        user: { email: email, password: password },
      })
      .then((response) => {
        console.log(response.data.user.token);
        if (response.data.user.token) {
          settoken(true);
          localStorage.setItem("token",response.data.user.token);
        }
      });
  };
  if (token) {
    return (
      <Redirect
        to={{
          pathname: "/blog",
          state: { token: token },
        }}
      />
    );
  }
  return (
    <div
      className="main"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          textAlign: "center",
          // border: "2px solid black",
          width: "55%",
          height: "55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 20%)",
          padding: "10px",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>LOGIN</h3>

          <input
            type="email"
            placeholder="Email Address"
            name="emailAddress"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{
              border: "2px solid grey",
              width: "150%",
            }}
            //   onBlur={this.handleBlur}
            autoComplete="off"
          />
          <br />
          {emailError && <div className="errorMsg">{emailError}</div>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            //   onBlur={this.handleBlur}
            style={{
              border: "2px solid grey",
              width: "150%",
              backgroundColor: "",
            }}
            autoComplete="off"
          />
          <br />
          {passwordError && <div className="errorMsg">{passwordError}</div>}

          <button
            type="submit"
            style={{
              alignSelf: "center",
              width: "100px",
            }}
            fullWidth
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
