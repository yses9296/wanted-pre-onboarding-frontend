import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ToDoItem from '../components/ToDoItem';

const Todo = () => {
    const API_URL = ' https://pre-onboarding-selection-task.shop/'
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const onChangeHandler = (e) => setInput(e.target.value);
    const createNewTask = (e) => {
        e.preventDefault();
        if(input.length !== ''){
            axios.post(`${API_URL}todos`, {todo: input}, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            })
            .then(() => {
                renderTodo();
            })
            .catch((err) => {
                console.log(err.response);
            }).finally(() => {});
        }
    }
    const renderTodo = async () =>  {
        await axios.get(`${API_URL}todos`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        })
        .then((response) => { setTodos(response.data) })
        .catch((err) => { console.err(err) })
        .finally(() => {});
    }

    useEffect(() => {
        renderTodo();
    },[])

    useEffect(() => {
        if(!ACCESS_TOKEN) {
            navigate("/signin");
        }
    }, [ACCESS_TOKEN, navigate])

    return (
        <div>
            <form onSubmit={createNewTask}>
                <input data-testid="new-todo-input" value={input} onChange={onChangeHandler} />
                <button data-testid="new-todo-add-button">추가</button>
            </form>

            <ul>
                {todos.map((todo) => {
                    return <ToDoItem key={todo.id} todo={todo} renderTodo={renderTodo}/>
                })}
            </ul>
        </div>
    )
}

export default Todo