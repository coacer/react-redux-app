import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newContent: '',
    };
  }

  handleChange(e) {
    switch (e.target.name) {
      case "title":
        this.setState({ newTitle: e.target.value });
        break;
      case "content":
        this.setState({ newContent: e.target.value });
        break;
      default:
        break;
    }
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.state.newTitle, this.state.newContent);
    this.setState({
      newTitle: '',
      newContent: '',
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
            value={ this.state.newTitle }
            onChange={ this.handleChange.bind(this) }
          />
        </label>
        <br />
        <label>
          Content:
          <input
            name="content"
            type="text"
            value={ this.state.newContent }
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
