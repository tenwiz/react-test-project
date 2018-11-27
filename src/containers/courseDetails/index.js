import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class CourseDetails extends Component {
  goBack = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <div className="CourseDetails">
        Yay! You reached Course Details Page
        <Button onClick={this.goBack} color="primary">Go To Course Page</Button>
      </div>
    );
  }
}

export default withRouter(CourseDetails);
