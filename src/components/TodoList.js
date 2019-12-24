import React from 'react';
import { connect } from "react-redux";
import { delTodo } from "../actions/todo";

const TodoList = (props) => {
  console.log(props);
  const todos = props.todos.map(todo => {
    return (
      <div key={ todo.id }>
        <span>{ todo.id } / { todo.title } / { todo.content }</span>
        <button onClick={ () => props.delTodo(todo.id) }>Delete</button>
      </div>
    );
  });
  return (
    <div>{ todos }</div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    delTodo: id => dispatch(delTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

