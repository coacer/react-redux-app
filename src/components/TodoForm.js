import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.content);
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodo.bind(this)}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={ this.state.title }
            onChange={ this.handleChange.bind(this) }
          />
        </label>
        <br />
        <label>
          Content:
          <input
            name="content"
            type="text"
            value={ this.state.content }
            onChange={ this.handleChange.bind(this) }
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title, content) => dispatch(addTodo(title, content))
  };
};
export default connect(null, mapDispatchToProps)(TodoForm);
