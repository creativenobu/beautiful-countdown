import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <Row>
        <Col>Settings</Col>
        <Col>Help</Col>
        <Col>Fullscreen</Col>
      </Row>
    </div>
  );
}

export default Header;
