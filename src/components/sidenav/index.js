import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import menuRoutes from '../../constants/menuRoutes';
import ProfileCard from './profileCard';

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <ProfileCard />
        <Nav vertical={true}>
          {menuRoutes.map(route => (
              <NavLink key={route.name} href={route.page}>
                {route.name}
              </NavLink>
            ))
          }
        </Nav>
      </div>
    );
  }
}

export default SideNav;
