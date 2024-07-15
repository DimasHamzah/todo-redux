const ActionType = {
    OPEN_CLOSE_MODAL:'OPEN_CLOSE_MODAL'
}

function receiveModalActionCreator(open) {
    return {
        type: ActionType.OPEN_CLOSE_MODAL,
        payload: {
            open
        }
    }
}

export  {
    ActionType,
    receiveModalActionCreator
}