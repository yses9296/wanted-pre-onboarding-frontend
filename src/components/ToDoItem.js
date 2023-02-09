import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToDoLi, ToDoLabel, EditInput, ButtonWrap, ToDoItemButton } from '../styles';

const ToDoItem = ({ todo, renderTodo }) => {
    const API_URL = ' https://pre-onboarding-selection-task.shop/';
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(todo.todo);
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

    const toggleEdit = () => {setIsEdit(prev => !prev)};
    const onChangeHandler = (e) => setValue(e.target.value);

    const updateTask = () => {
        if(value !== ''){
            axios.put(
                `${API_URL}todos/${todo.id}`, 
                {
                    todo: value,
                    isCompleted: isCompleted
                },
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                    }
                }            
            ).then((response) => {
                setIsEdit(false);
                renderTodo();
            }).catch((err) => {
                alert(`Update task Error ${err}`)
            }).finally(() => {});
        }
    }
    const removeTask = () => {
        axios.delete(
            `${API_URL}todos/${todo.id}`,
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }            
        ).then(() => {
            renderTodo();
        }).catch((err) => {
            alert(`Delete task Error ${err}`)
        }).finally(() => {});
    }

    const toggleChecked = (e) => {
        setIsCompleted( prev => !prev)
    }

    useEffect(() => {
        updateTask();
    }, [isCompleted])

    return (
    <>
        {isEdit ? (
            <ToDoLi>
                <EditInput data-testid="modify-input" value={value} onChange={onChangeHandler}/>
                <ButtonWrap>
                    <ToDoItemButton data-testid="submit-button" onClick={updateTask}>제출</ToDoItemButton>
                    <ToDoItemButton data-testid="cancel-button" onClick={toggleEdit}>취소</ToDoItemButton>
                </ButtonWrap>
            </ToDoLi>
        ) : (
            <ToDoLi>
                <ToDoLabel>
                    <input type="checkbox" onChange={toggleChecked} checked={isCompleted}/>
                    <span>{value}</span>
                </ToDoLabel>
                <ButtonWrap>
                    <ToDoItemButton data-testid="modify-button" value={isEdit} onClick={toggleEdit}>수정</ToDoItemButton>
                    <ToDoItemButton data-testid="delete-button" onClick={removeTask}>삭제</ToDoItemButton>
                </ButtonWrap>

            </ToDoLi>
        )}
    </>
    )
}

export default ToDoItem