/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */

import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', message: '' };
  }

  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password ends */}

        <div className="text-right">
          {this.state.message}

          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }

  onLoginClick = async () => {
    // eslint-disable-next-line no-console
    console.log(this.state);

    // eslint-disable-next-line vars-on-top
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      // eslint-disable-next-line comma-dangle
      { method: 'GET' }
    );
    // eslint-disable-next-line vars-on-top
    var body = await response.json();
    console.log(body);

    if (body.length > 0) {
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again</span>
        ),
      });
    }
  };
}
