import React from "react";

class AppHeaderLink extends React.Component {
  render() {
    let linkClassName = "nav-link";
    const initialProps = {};
    if (this.props.status === "active") {
      linkClassName += " active";
      initialProps["aria-current"] = "page";
    } else if (this.props.status === "disabled") {
      linkClassName += " disabled";
      initialProps["tabIndex"] = "-1";
      initialProps["aria-disabled"] = "true";
    }

    return (
      <li className="nav-item">
        <a className={linkClassName} href="#" {...initialProps}>
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default AppHeaderLink;
