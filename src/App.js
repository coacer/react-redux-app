import React from 'react';
import './App.css';
import { connect } from "react-redux";
import * as Todoactions from "./actions/todo";
import {bindActionCreators} from 'redux';

const App = (props) => {
  console.log(props);
  const todos = props.todos.map( todo => {
    return (
      <li>{ todo.id } / { todo.title } / { todo.content }</li>
    );
  });
  return (
    <ul>{ todos }</ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    todoActions: bindActionCreators(Todoactions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispathToProps)(App);
