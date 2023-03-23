/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/sort-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */

import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              {/* delete button starts */}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              {/* delete button ends */}
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>

            <div>$ {this.state.product.price}</div>
          </div>
          {/* card body ends here */}

          <div className="card-footer">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* float-left ends here */}

            <div className="float-right">{this.props.children}</div>
          </div>
          {/* card-footer ends here */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    //console.log("componentDidMount - Product");
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate - Product");
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - Product");
  }
}
