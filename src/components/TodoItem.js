import React, { Component } from "react";
import styles from "./TodoItem.module.css";

export default class TodoItem extends Component {
  render() {
    // return <div key={this.props.todo.id}>{this.props.todo.text}</div>;
    return (
      <div key={this.props.todo.id} className="item">
        <div className={`content ${styles.todoitem_remove}`}>
          <a className="header">{this.props.todo.text}</a>
          <button
            onClick={this.props.onClick.bind(this, this.props.todo.id)}
            className="negative ui button"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
