import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ToDoItem from '../components/ToDoItem';
import { Container, Header, ToDoForm, ToDoInput, ToDoButton, ToDoUl } from '../styles';

const Todo = () => {
    const API_URL = ' https://pre-onboarding-selection-task.shop/'
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const onChangeHandler = (e) => setInput(e.target.value);
    const createNewTask = (e) => {
        e.preventDefault();
        if(input !== ''){
            axios.post(`${API_URL}todos`, {todo: input}, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            })
            .then(() => {
                renderTodo();
                setInput('');
            })
            .catch((err) => {
                console.log(err.response);
            }).finally(() => {});
        }
        else{
            alert('할 일을 추가해 주세요.')
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
        <Container>
            <Header>ToDo List</Header>
            <ToDoForm onSubmit={createNewTask}>
                <ToDoInput data-testid="new-todo-input" value={input} onChange={onChangeHandler} />
                <ToDoButton data-testid="new-todo-add-button">추가</ToDoButton>
            </ToDoForm>

            <ToDoUl>
                {todos.map((todo) => {
                    return <ToDoItem key={todo.id} todo={todo} renderTodo={renderTodo}/>
                })}
            </ToDoUl>
        </Container>
    )
}

export default Todo