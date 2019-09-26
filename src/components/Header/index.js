import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header flex flex-row py-4 justify-between">
      <div className="user-options">
        <a className="settings p-5" href="#">Settings</a>
        <a className="help p-5" href="#">Help</a>
      </div>
      <div className="util-options">
        <a className="fullscreen p-5" href="#">Fullscreen</a>
      </div>
    </div>
  );
}

export default Header;
