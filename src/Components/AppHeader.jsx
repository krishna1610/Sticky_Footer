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
