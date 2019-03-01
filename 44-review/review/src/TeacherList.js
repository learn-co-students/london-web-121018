import React, { Component } from "react";
import TeacherCard from "./TeacherCard";

class TeacherList extends Component {
  render() {
    const teachers = this.props.teachers.map(teacher => (
      <TeacherCard teacher={teacher} />
    ));

    return <ul>{teachers}</ul>;
  }
}

export default TeacherList;
