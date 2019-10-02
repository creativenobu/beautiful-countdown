import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <div className="header container-fluid p-0">
        <div className="row">
          <div className="col text-left">
            <h2>
              <a className="header__link" href="#">
                About
              </a>
            </h2>
          </div>
          <div className="col text-right">
            <h2>
              <a className="header__link" href="#">
                Fullscreen
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
