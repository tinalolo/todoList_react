//步驟5
// 把models.js(步驟2)的資料和message.js(步驟3)建構的動作做成一個reducer，一樣在最後把他匯出：
// 1.將資料和動作指令匯進來。
// 2.把資料給Reducer的state。
// 3.在Reducer中的ADD_TODOLIST，給新資料id值，再加進原有的資料中。
// id值可以跟著長度一直累加是因為todolost沒有刪除功能，如果有的話就會出現單號重複的狀況，無法這樣做！
import { todoData } from "../constants/todoList.js";
import { ADD_TODOLIST } from "../constants/todoAction-type.js";
//先匯入指令
import { EDIT_TODOLIST } from "../constants/todoAction-type.js";

// const todoListReducer = (state = todoData, action) => {
//   switch (action.type) {
//     case ADD_TODOLIST: {
//       action.payload.id = state.length + 1;
//       return [...state, action.payload];
//     }
//     default: {
//       return state;
//     }
//   }
// };

const todoListReducer = (state = todoData, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      action.payload.id = state.length + 1;
      return [...state, action.payload];
    }
    case EDIT_TODOLIST: {
      //先以目前的資料去複製另一個全新的陣列
      let newState = state.slice(0);
      //下迴圈比對id值
      for (let i = 0; i <= newState.length - 1; i++) {
        if (newState[i].id === action.payload.id) {
          //將新的資料用splice()取代原本的位置中的資料
          newState.splice(i, 1, action.payload);
          break;
        }
      }
      //回傳處理後的新資料
      return newState;
    }
    default: {
      return state;
    }
  }
};

window.todoData = todoData;

export { todoListReducer };
