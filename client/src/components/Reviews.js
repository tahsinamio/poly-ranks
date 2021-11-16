import React, { Component } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";
import { fetchReviews } from "../actions";

class Reviews extends Component {
  constructor() {
    super();
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

export default Reviews;
