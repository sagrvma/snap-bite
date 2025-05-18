//Class based component alternate to User.ja
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact: {this.props.contact}</h3>
      </div>
    );
  }
}

export default UserClass;
