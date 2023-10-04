import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    return (
      <div className=' col-sm-6 col-md-4'>
        <div className='card'>
          <div className='card-header'>
            <img src={this.props.img} alt="" />
          </div>
          <div className='card-body'>
            <h2>{this.props.name}</h2>
            <h5>{this.props.position}</h5>
            <div>{this.props.phone}</div>
            <div>{this.props.website}</div>
            <div>{this.props.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
