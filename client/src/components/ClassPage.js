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
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Evals</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1</td>
              <td>Abel, Christian</td>
              <td>3.22</td>
              <td>37</td>
            </tr>
            <tr>
              <td>#2</td>
              <td>Eagon, Scott</td>
              <td>3.03</td>
              <td>33</td>
            </tr>
            <tr>
              <td>#3</td>
              <td>Bailey, Karl</td>
              <td>2.89</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { class: state.class };
}

export default connect(mapStateToProps, { fetchClass })(ClassPage);
