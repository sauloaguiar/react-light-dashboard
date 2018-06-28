import React, { Component } from 'react';
import moment from 'moment';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <span className="headerDate">{moment().format('dddd D MMMM, YYYY')}</span>
          <span className="headerHour">{moment().format('h:m A')}</span>
          <div className="headerUserContainer">
            <span className="headerUserinfo">Name Username</span>
            <span className="headerUserInitials">NS</span>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
