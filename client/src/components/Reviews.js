import React, { Component } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";
import { fetchReviews } from "../actions";

class Reviews extends Component {
  componentDidMount() {
    this.props.fetchClass(window.location.pathname.split("/").slice(-1)[0]);
  }

  renderReviews() {
    console.log(this.props);
    return this.props.name.map((prof) => {
      return (
        <ul>
          <li>
            <ReviewCard {...prof} />
          </li>
        </ul>
      );
    });
  }

  render() {
    return <div>{this.renderReviews()}</div>;
  }
}


function mapStateToProps(state) {
  return { class: state.class };
}

export default connect(mapStateToProps, { fetchReviews })(Reviews);
