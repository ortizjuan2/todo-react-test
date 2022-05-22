import React, { Component, Fragment } from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";

export default class App extends Component {
  state = { todoList: [] };
  addTodoApp = (term) => {
    // console.log("addTodoApp: " + term);
    this.setState({
      todoList: this.state.todoList.concat({
        id: (Math.random() + 1).toString(36).substring(7),
        text: term,
      }),
    });
    // console.log(this.state.todoList);
  };

  removeTodo = (id) => {
    // console.log("******" + id);
    const newTodos = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todoList: newTodos });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="ui container">
          <AddTodoForm onSubmit={this.addTodoApp} />
          <div className="ui middle aligned divided list">
            {this.state.todoList.map((todo) => {
              return (
                <TodoItem key={todo.id} todo={todo} onClick={this.removeTodo} />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
