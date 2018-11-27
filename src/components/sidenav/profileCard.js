import React, { Component } from 'react';
import avatar from '../../assets/images/myAvatar.png';
class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
        <div className="avatar">
            <img src={avatar} alt="profile" />
        </div>
        <div className="name">
            Firstname lastname
        </div>
      </div>
    );
  }
}

export default ProfileCard;
