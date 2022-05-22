import React, { Component } from "react";
import styles from "./AddTodoForm.module.css";

export default class AddTodoForm extends Component {
  state = { term: "" };

  addTodo = (event) => {
    event.preventDefault();
    // console.log("AddTodoFrom:" + this.state.term);
    if (this.state.term.length !== 0) {
      this.props.onSubmit(this.state.term);
      this.setState({ term: "" });
    }
  };

  render() {
    return (
      <form className="ui inverted form" onSubmit={this.addTodo}>
        <div className="field">
          <label>New Todo</label>
          <input
            type="text"
            name="todo"
            placeholder="Todo"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    );
  }
}
