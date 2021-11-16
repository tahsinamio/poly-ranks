import React, { Component } from "react";
import ClassProfile from "./ClassProfile";
import Reviews from "./Reviews"
import { connect } from "react-redux";
import { fetchClass } from "../actions";

class ClassPage extends Component {
  componentDidMount() {
    this.props.fetchClass(window.location.pathname.split("/").slice(-1)[0]);
  }

  renderReviews() {
    console.log("render Reviews", this.props)
    return <Reviews {...this.props.class} />;
  }

  renderClass() {
    console.log("render Class", this.props.class);
    return <ClassProfile {...this.props.class} />;
  }

  render() {
    return (
      <div>
        {this.renderClass()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { class: state.class };
}

export default connect(mapStateToProps, { fetchClass })(ClassPage);
