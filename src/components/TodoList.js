import React from 'react';
import { connect } from "react-redux";
import { delTodo, fetchTodos } from "../actions/todo";

class TodoList extends React.Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.todos);
    const todos = this.props.todos.map(todo => {
      return (
        <div key={ todo.id }>
          <span>{ todo.id } / { todo.title } / { todo.content }</span>
          <button onClick={ () => this.props.delTodo(todo.id) }>Delete</button>
        </div>
      );
    });
    return (
      <div>
        { todos }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    delTodo: id => dispatch(delTodo(id)),
    fetchTodos: () => dispatch(fetchTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

