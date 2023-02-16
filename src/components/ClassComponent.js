import React, { Component } from 'react';
import './Style.css';

class ClassComponent extends Component {
  render() {
    return (
      <div className="container2">
        <h2 className="ClassComponentText">
          This is created using Class Component
        </h2>
        <br />
        <p id="p2">This is done using External CSS</p>
        <br />
        <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>
          This is done using Inline CSS
        </p>
      </div>
    );
  }
}

export default ClassComponent;
