import React, { Component } from "react";

export default class NavBar extends Component {
  state = { activeItem: "HOME" };

  handelItemClick = (e) => {
    // console.log(e.target.innerHTML);
    this.setState({ activeItem: e.target.innerHTML });
    // this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <div className="ui secondary inverted pointing menu">
          <a
            href="#"
            onClick={this.handelItemClick}
            className={`${
              this.state.activeItem === "HOME" ? "active item" : "item"
            }`}
          >
            HOME
          </a>
          <a
            href="#"
            onClick={this.handelItemClick}
            className={`${
              this.state.activeItem === "ABOUT" ? "active item" : "item"
            }`}
          >
            ABOUT
          </a>
        </div>
      </div>
    );
  }
}
