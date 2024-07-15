import { ActionType } from "./action";

function modalReducer(modal = false, action = {}) {
    switch (action.type) {
        case ActionType.OPEN_CLOSE_MODAL:
            return action.payload.open;
        default:
            return modal;
    }
}

export default modalReducer;