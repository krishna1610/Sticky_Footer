import React from "react";
import AppHeaderForm from "./AppHeaderForm";
import AppHeaderLinks from "./AppHeaderLinks";

class AppHeader extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Fixed navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <AppHeaderLinks />
              <AppHeaderForm />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
