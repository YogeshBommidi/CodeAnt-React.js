import React, { Component } from "react";
import "./RepoPage.css";
import repodata from "../../Data/repo-data.json";
import RepositoriesCards from "../RepositoriesCards/RepositoriesCards";

export default class extends Component {
  render() {
    return (
      <div className="Repo-Container">
        <div className="repo-left">
          <div className="repo-left-header">
            <div className="repo-company-container">
              <img src="/logo1.png" alt="" />
              <span>CodeAnt AI</span>
            </div>
            <img src="/hamburger.png" alt="" />
          </div>

          <div className="repo-menu">
            <div className="repo-menu-dropdown">
              <span>UtkarshDhairyaPa...</span>
              <img src="/chevron-down.png" alt="" />
            </div>
            <button className="repo-left-button">
              <img src="/home.png" alt="" />
              <span>Repositories</span>
            </button>
            <div className="repo-menu-items">
              <img src="/code.png" alt="" />
              <span>AI Code Review</span>
            </div>
            <div className="repo-menu-items">
              <img src="/cloud.png" alt="" />
              <span>Cloud Security</span>
            </div>
            <div className="repo-menu-items">
              <img src="/book.png" alt="" />
              <span>How to Use</span>
            </div>
            <div className="repo-menu-items">
              <img src="/gear.png" alt="" />
              <span>Settings</span>
            </div>
            <div className="repo-menu-items">
              <img src="/phone.png" alt="" />
              <span>Support</span>
            </div>
            <div className="repo-menu-items">
              <img src="/sign-out.png" alt="" />
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="repo-right">
          <div className="repo-right-container">
            <div className="repo-right-hero">
              <div className="repo-heading">
                <span>Repositories</span>
                <span>33 total repositories</span>
              </div>
              <div className="repo-right-buttons">
                <button className="repo-right-button">
                  <img src="/refresh.png" alt="" />
                  <span>Refresh All</span>
                </button>
                <button className="repo-right-button right-button-2">
                  <img src="/plus.png" alt="" />
                  <span>Add Repository</span>
                </button>
              </div>
            </div>
            <div className="search-bar">
              <img src="/search.png" alt="" />
              <span>Search Repositories</span>
            </div>
            <div className="repo-cards">
              {repodata.map((cards, i) => {
                return <RepositoriesCards cards={cards} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
