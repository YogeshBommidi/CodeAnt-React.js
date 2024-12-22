import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [activeButton, setActiveButton] = useState("button1");
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const navigate = useNavigate();

  return (
    <div className="Login-Container">
      <div className="login-box">
        <div className="box-heading">
          <div className="company">
            <img src="/logo1.png" alt="" />
            <span>CodeAnt AI</span>
          </div>
          <span>Welcome to CodeAnt AI</span>
          <div className="saas/selfhosted">
            <button
              className="btn"
              onClick={() => handleButtonClick("button1")}
              style={{
                backgroundColor:
                  activeButton === "button1" ? "#1570ef" : "#e9eaeb",
                color: activeButton === "button1" ? "white" : "black",
              }}
            >
              SAAS
            </button>
            <button
              className="btn"
              onClick={() => handleButtonClick("button2")}
              style={{
                backgroundColor:
                  activeButton === "button2" ? "#1570ef" : "#e9eaeb",
                color: activeButton === "button2" ? "white" : "black",
              }}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <hr />
        <div className="login-with">
          {activeButton === "button1" && (
            <>
              <div
                className="login-with-type"
                onClick={() => navigate(`../Repository`)}
              >
                <img src="/github.png" alt="" />
                <span>Sign in with Github</span>
              </div>
              <div
                className="login-with-type"
                onClick={() => navigate(`../Repository`)}
              >
                <img src="/bitbucket.png" alt="" />
                <span>Sign in with Bitbucket</span>
              </div>
              <div
                className="login-with-type"
                onClick={() => navigate(`../Repository`)}
              >
                <img src="/azure.png" alt="" />
                <span>Sign in with Azure</span>
              </div>
              <div
                className="login-with-type"
                onClick={() => navigate(`../Repository`)}
              >
                <img src="/gitlab.png" alt="" />
                <span>Sign in with Gitlab</span>
              </div>
            </>
          )}
          {activeButton === "button2" && (
            <>
              <div
                className="login-with-type"
                onClick={() => navigate(`../Repository`)}
              >
                <img src="/gitlab.png" alt="" />
                <span>Sign in with Gitlab</span>
              </div>
              <div
                className="login-with-type"
                onClick={() => navigate(`../Repository`)}
              >
                <img src="/key.png" alt="" />
                <span>Sign in with SSO</span>
              </div>
            </>
          )}
        </div>
      </div>
      <span className="login-text">
        <span>By signing up you agree to the</span>
        <b> Privacy Policy</b>
      </span>
    </div>
  );
}
