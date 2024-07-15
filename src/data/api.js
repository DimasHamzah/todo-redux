const api = (() => {

    const BASE_URL = 'http://192.168.1.69:8000/api/todo';

    async function getTodolist() {
        const response = await fetch(BASE_URL);
        const responseJson = await response.json();

        const { status, result } = responseJson;

        if (status !== 'ok') {
            throw new Error('error');
        }

        return result;
    }

    async function createTodo({ title, description }) {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description
            })
        });

        const responseJson = await response.json();

        const { status, result } = responseJson;

        if (status !== 'ok') {
            throw new Error('Error');
        }

        return result;
    }

    return {
        getTodolist,
        createTodo
    }

})();

export default api;