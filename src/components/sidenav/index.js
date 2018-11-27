import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleSideNav } from '../../actions/appAction';
import { Nav, NavLink, Button } from 'reactstrap';
import menuRoutes from '../../constants/menuRoutes';
import ProfileCard from './profileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class SideNav extends Component {
  toggleMenu = () => {
    const { toggleSideNav, isCollapsed } = this.props;
    toggleSideNav(!isCollapsed);
  }

  render() {
    const { isCollapsed } = this.props;
    return (
      <div className="SideNav" style={isCollapsed? { width: 280 } : { width: 70 }}>
        <ProfileCard small={isCollapsed} />
        <Nav vertical={true}>
          {menuRoutes.map(route => (
            <div key={route.name} >
              <NavLink route={route.page}>
                <FontAwesomeIcon className="icon" icon={route.icon} />
                {isCollapsed && route.name}
              </NavLink>
              {
                route.children.length > 0 && (
                  <div>
                    {
                      isCollapsed && route.children.map((child) => (
                        <NavLink className="child-route" route={child.page} key={child.name}>
                          {isCollapsed && child.name}
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
        <div className="toggleMenu">
          <Button color="success" onClick={this.toggleMenu}>
            <FontAwesomeIcon icon={isCollapsed ? ['fas', 'step-backward'] : ['fas', 'step-forward']} />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCollapsed: state.app.isCollapsed
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSideNav
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideNav)
);
