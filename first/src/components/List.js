import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              An item
            </label>
          </div>
        </li>

        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              A second item
            </label>
          </div>
        </li>
      </ul>
    );
  }
}

export default List;
