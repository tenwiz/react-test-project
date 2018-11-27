import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <Link to="/showcourses/12">Go To CourseDetails - 12</Link>
        <Link to="/showcourses/34">Go To CourseDetails - 34</Link>
        <Link to="/showcourses/56">Go To CourseDetails - 56</Link>
      </div>
    );
  }
}

export default Courses;
