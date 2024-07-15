import api from "../../data/api";

const ActionType = {
    RECEIVE_TODO: 'RECEIVE_TODO',
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO',
}

function receiveTodoActionCreator(todos) {
    return {
        type: ActionType.RECEIVE_TODO,
        payload: {
            todos
        }
    }
}

function addTodoActionCreator(todos) {
    return {
        type: ActionType.ADD_TODO,
        payload: {
            todos
        }
    }
}


function updateTodoActionCreator(todo) {
    return {
        type: ActionType.UPDATE_TODO,
        payload: {
            todo
        }
    }
}

function deleteTodoActionCreator(todo) {
    return {
        type: ActionType.DELETE_TODO,
        payload: {
            todo
        }
    }
}

function asyncAddTodo({ title, description }) {
    return async (dispatch) => {
        try {
            const todo = await api.createTodo({ title, description });
            dispatch(addTodoActionCreator(todo));
        } catch (error) {
            console.log(error.message);
        }
    }
}

function asyncReceiveTodo() {
    return async (dispatch) => {
        try {
            const todolist = await api.getTodolist();
            dispatch(receiveTodoActionCreator(todolist));
        } catch (error) {
           console.log(error.message)
        }
    }
}

export {
    ActionType,
    receiveTodoActionCreator,
    addTodoActionCreator,
    asyncReceiveTodo,
    asyncAddTodo
}