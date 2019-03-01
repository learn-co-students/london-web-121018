import React, { Component } from "react";
import TeacherList from "./TeacherList";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      teachers: [
        {
          name: "dan",
          age: 27,
          livesOnABoat: false,
          facialHairGame: "weak",
          wearsGlasses: true
        },
        {
          name: "lucy",
          age: 29,
          livesOnABoat: true,
          facialHairGame: "weak",
          wearsGlasses: true
        },
        {
          name: "gabe",
          age: 23,
          livesOnABoat: false,
          facialHairGame: "strong af",
          wearsGlasses: false
        }
      ]
    };
  }

  handleInputChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  render() {
    const teachers = this.state.teachers.filter(teacher => {
      return teacher.name.includes(this.state.searchInput);
    });
    return (
      <div>
        <Filter
          handleInputChange={this.handleInputChange}
          searchInput={this.state.searchInput}
        />
        {teachers.length > 0 ? (
          <TeacherList teachers={teachers} />
        ) : (
          "no teachers found"
        )}
      </div>
    );
  }
}

export default App;
