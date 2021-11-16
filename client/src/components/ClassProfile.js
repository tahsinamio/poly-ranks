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
        />
      );
    }
  }

  renderTable() {
    if (this.props.profList) {
      return this.props.profList.map((prof, i = 0) => {
        i++;
        return (
            <tbody>
              <tr>
                <td>{i}</td>
                <td>{prof[0]}</td>
                <td>{prof[1]}</td>
                <td>{prof[2]}</td>
              </tr>
            </tbody>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h4 class="header">{this.props.name}</h4>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Evals</th>
            </tr>
          </thead>
          {this.renderTable()}
        </table>
      </div>
    );
  }
}

export default ClassProfile;
