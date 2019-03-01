import React, { Component } from "react";

class TeacherCard extends Component {
  description = () => {
    const doWearGlasses = this.props.teacher.wearsGlasses ? "do" : "do not";
    const text = `They have a ${
      this.props.teacher.facialHairGame
    } facial hair game and they ${doWearGlasses} wear glasses`;
    return text;
  };

  render() {
    return (
      <li>
        <div>
          <h3>{this.props.teacher.name}</h3>
          <h4>{this.props.teacher.age}</h4>
          {this.props.teacher.livesOnABoat ? (
            <p>'They live on a boat'</p>
          ) : (
            <p>'They do not live on a boat'</p>
          )}
          <p>{this.description()}</p>
        </div>
      </li>
    );
  }
}

export default TeacherCard;
