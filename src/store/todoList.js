// 用configureStore.js匯入reducer來產生store：
import { createStore } from "redux";
import { todoListReducer } from "../reducers";

const todoListStore = createStore(todoListReducer);

export { todoListStore };
