import axios from 'axios'

export function getTodo(id) {
    return axios.get(`http://127.0.0.1:3001/api/todo/${id}`)
}

export function getTodoList() {
    return axios.get("http://127.0.0.1:3001/api/todo")
}

export function addTodo(text) {
    return axios.post("http://127.0.0.1:3001/api/todo", { text })
}

export function putTodo(id, text) {
    return axios.put("http://127.0.0.1:3001/api/todo", { id, text })
}

export function deleteTodo(id) {
    return axios.delete("http://127.0.0.1:3001/api/todo", { data: {id} })
}