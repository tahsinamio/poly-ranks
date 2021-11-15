import React from "react";
import ReactStars from "react-rating-stars-component";
import AddReview from "./AddReview";

class ClassProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderStars = this.renderStars.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }
  
  renderStars() {
    if (this.props.rating && this.props.evals) {
      return (
        <ReactStars
          value={this.props.rating / this.props.evals}
          count={5}
          size={24}
          activeColor="#ffd700"
          isHalf={true}
          edit={false}
         />)
    }
  }

  render() {
    return (
      <div>
          <h4 class="header">CHEM 124</h4>
      </div>
    );
  }
}

export default ClassProfile;
