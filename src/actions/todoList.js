//步驟3
// 從剛剛的action - types.js中匯入指令後建構動作並匯出
import { ADD_TODOLIST } from "../constants/todoAction-type.js";
import { EDIT_TODOLIST } from "../constants/todoAction-type.js";

export const addTodoList = (todoList) => ({
  type: ADD_TODOLIST,
  payload: todoList,
});

export const editTodoList = (todoList) => ({
  type: EDIT_TODOLIST,
  payload: todoList,
});
