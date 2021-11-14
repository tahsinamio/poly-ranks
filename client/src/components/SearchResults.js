import React from "react";
import ClassCard from "./ClassCard";

class SearchResults extends React.Component {

  render() {
    return (
      <div>
        <div
          onClick={() => {
            window.location = "/doctor";
          }}
          key={this.props.id}
        >
          <a href={`/doctors/${this.props._id}`}>
            <ClassCard {...this.props}/>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchResults;
