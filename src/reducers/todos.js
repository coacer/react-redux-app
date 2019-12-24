import { ADD_TODO, DEL_TODO } from "../actions/types";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = state.length > 0 ? state.slice(-1)[0].id + 1 : 1;
      const todo = { id, ...action.payload };
      return [ ...state, todo ];
    case DEL_TODO:
      const filterTodos = state.filter( todo => todo.id !== action.payload );
      return filterTodos;
    default:
      return state;
  }
};

export default todoReducer;
