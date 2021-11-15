import React from "react";
import ClassCard from "./ClassCard";

class SearchResults extends React.Component {

  render() {
    return (
      <div>
        <div
          onClick={() => {
            window.location = "/class";
          }}
          key={this.props.id}
        >
          <a href={`/classes/${this.props._id}`}>
            <ClassCard {...this.props}/>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchResults;
