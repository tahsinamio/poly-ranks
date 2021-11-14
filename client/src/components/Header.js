import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
        return (
          <div>
            <li>
              <ul><a href="/auth/google">Class List</a></ul>
              {/* <ul><a href="/api/logout">About</a></ul> */}
            </li>
          </div>
        );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper  teal darken-4">
            <a href="/" className="left brand-logo">
              <div className="container">
                <span class="valign-wrapper" style={{ fontSize: "20px" }}>
                  PolyRanks
                </span>
              </div>
            </a>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
