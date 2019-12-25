import axios from "axios";
import { ADD_TODO, DEL_TODO, FETCH_TODOS } from "./types";

export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    payload: { title, content }
  }
};

export const delTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: id
  };
}

export const fetchTodos = () => async dispatch => {
  const { data } = await axios('http://localhost:8080/api/v1/todos');
  dispatch({
    type: FETCH_TODOS,
    payload: data
  });
};
