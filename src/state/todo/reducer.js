import { ActionType } from "./action";

function todoReducer(todos = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_TODO:
            return action.payload.todos;
        default:
            return todos;
    }
}

export default todoReducer;