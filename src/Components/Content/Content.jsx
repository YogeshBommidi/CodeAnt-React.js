import React, { Component } from "react";
import "./Content.css";
import CountUp from "react-countup";

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="group-1">
          <div className="group-1-heading">
            <img src="/logo.jpg" alt="logo" />
            <span className="heading-text">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
          <hr />
          <div className="stats">
            <div className="stat">
              <span className="number-font">
                <CountUp start={1} end={30} duration={4} />
                <span>+</span>
              </span>
              <span className="text-font">Language Support</span>
            </div>
            <div className="stat">
              <span className="number-font">
                <CountUp start={1} end={10} duration={4} />
                <span>K+</span>
              </span>
              <span className="text-font">Developers</span>
            </div>
            <div className="stat">
              <span className="number-font">
                <CountUp start={10} end={100} />
                <span>K+</span>
              </span>
              <span className="text-font">Hours Saved</span>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="section1">
            <div className="piechart">
                <div>
                    <img src="/Ellipse.png" alt="" className="piechart1"/>
                    <img src="pie-chart.png" alt="" className="piechart2"/>
                </div>
            </div>
            <div className="increament">
              <div>
                <img src="/right.png" alt="" />
                <span>14%</span>
              </div>
              <span>This week</span>
            </div>
          </div>
          <div className="section2">
            <span>Issues Fixed</span>
            <span>500K+</span>
          </div>
        </div>
        <div className="logo">
          <img src="/Subtract.png" alt="logo" />
        </div>
      </div>
    );
  }
}
