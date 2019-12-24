import { ADD_TODO, DEL_TODO } from "./types";

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
