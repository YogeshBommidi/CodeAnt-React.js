import React, { useState, useEffect } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { GiCancel } from "react-icons/gi"; // Import the cancel icon
import "./RepoPage.css";
import repodata from "../../Data/repo-data.json";
import RepositoriesCards from "../RepositoriesCards/RepositoriesCards";

const RepoPage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Repo-Container">
      <div className="repo-left">
        <div className="repo-left-header">
          <div className="repo-company-container">
            <img src="/logo1.png" alt="Company Logo" />
            <span>CodeAnt AI</span>
          </div>
          {/* Only show hamburger or cancel for mobile */}
          {isMobile && (
            <div
              onClick={() => setMenuOpened(!menuOpened)} // Toggle menuOpened state on click
              className="menu-icon"
            >
              {menuOpened ? (
                <img src="/cancel.png" />
              ) : (
                <img src="/hamburger.png" alt="Hamburger Icon" /> // Show hamburger icon when menu is closed
              )}
            </div>
          )}
        </div>

        {/* Show menu only if menu is opened or for non-mobile screens */}
        {(menuOpened || !isMobile) && (
          <div className="repo-menu">
            <div className="repo-menu-dropdown" onClick={() => setMenuOpened(false)}>
              <span>UtkarshDhairyaPanwar</span>
              <img src="/chevron-down.png" alt="Dropdown Icon" />
            </div>
            <div className="repo-left-button" onClick={() => setMenuOpened(false)}>
              <TiHomeOutline size={20} />
              <span>Repositories</span>
            </div>
            {[
              { src: "/code.png", text: "AI Code Review" },
              { src: "/cloud.png", text: "Cloud Security" },
              { src: "/book.png", text: "How to Use" },
              { src: "/gear.png", text: "Settings" },
              { src: "/phone.png", text: "Support" },
              { src: "/sign-out.png", text: "Logout" },
            ].map((item, index) => (
              <div className="repo-menu-items" key={index} onClick={() => setMenuOpened(false)}>
                <img src={item.src} alt={`${item.text} Icon`} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="repo-right">
        <div className={`repo-right-container ${menuOpened ? "menu-opened" : ""}`}>
          <div className="repo-right-hero">
            <div className="repo-heading">
              <span>Repositories</span>
              <span>33 total repositories</span>
            </div>
            <div className="repo-right-buttons">
              <button className="repo-right-button">
                <img src="/refresh.png" alt="Refresh Icon" />
                <span>Refresh All</span>
              </button>
              <button className="repo-right-button right-button-2">
                <img src="/plus.png" alt="Add Icon" />
                <span>Add Repository</span>
              </button>
            </div>
          </div>
          <div className="search-bar">
            <img src="/search.png" alt="Search Icon" />
            <span>Search Repositories</span>
          </div>
          <div className="repo-cards">
            {repodata.map((cards, i) => (
              <RepositoriesCards cards={cards} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
