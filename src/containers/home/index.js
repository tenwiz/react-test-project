import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import SideNav from '../../components/sidenav';
import Courses from '../../containers/courses';
import CourseDetails from '../../containers/courseDetails';
import Welcome from '../../containers/welcome';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SideNav />
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/showcourses" render={() => (<Courses />)} />
            <Route exact path="/showcourses/:id" render={() => (<CourseDetails />)} />
            <Route exact path="/" render={() => (<Welcome />)} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
