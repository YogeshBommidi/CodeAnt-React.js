import React, { Component } from "react";
import './SignInPage.css'
import Content from "../Content/Content";
import Login from "./Login/Login";

export default class SignInPage extends Component {
  render() {
    return (
      <div className="signinpage">
        <div className="left">
            <Content/>
        </div>
        <div className="right">
            <Login/>
        </div>
      </div>
    );
  }
}
