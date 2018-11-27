import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import menuRoutes from '../../constants/menuRoutes';
import ProfileCard from './profileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <ProfileCard />
        <Nav vertical={true}>
          {menuRoutes.map(route => (
            <div key={route.name} >
              <NavLink route={route.page}>
                <FontAwesomeIcon className="icon" icon={route.icon} />
                {route.name}
              </NavLink>
              {
                route.children.length > 0 && (
                  <div>
                    {
                      route.children.map((child) => (
                        <NavLink className="child-route" route={child.page} key={child.name}>
                          {child.name}
                        </NavLink>
                      ))
                    }
                  </div>
                )
              }
            </div>
            ))
          }
        </Nav>
      </div>
    );
  }
}

export default SideNav;
