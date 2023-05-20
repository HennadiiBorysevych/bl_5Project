const { createSlice } = require('@reduxjs/toolkit');

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    editTodo(state, action) {
      state.map(item => {
        if (item.id === action.payload.id) {
          item.query = action.payload.query;
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
