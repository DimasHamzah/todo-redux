import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todo/reducer";
import modalReducer from "./modal/reducer";

const store = configureStore({
   reducer: {
       todos: todoReducer,
       modal: modalReducer,
   }
});

export default store;