import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
            Facebook
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
            Youtube
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
            <label className="form-check-label" htmlFor="flexCheckDefault3">
            Twitter
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
            <label className="form-check-label" htmlFor="flexCheckDefault4">
            Instagram
            </label>
          </div>
        </li>
      </ul>
    );
  }
}

export default Page;
