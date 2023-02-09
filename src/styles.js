import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
    width: 60%;
    min-height: 90vh;
    margin: 0 auto;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 0;
`
export const Header = styled.h2`
    font-size: 3rem;
    margin-bottom: 30px;
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Input = styled.input`
    min-width: 300px;
    padding: 10px 20px;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #201F1D;
`
export const Button = styled.button`
    min-width: 150px;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    transition: .25s;

    &: hover {
        background-color: #FF7E62;
        transition: .25s;
    }
`
export const Error = styled.p`
    color: #FD5639;
    font-size: 16px;
    font-weight: 800;
`
export const LinkItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    text-decoration: none;
    color: #A5766D;
    font-size: 16px;

    &: hover {
        color: #FF7E62;
    }
`

export const ToDoForm = styled.form`
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
`
export const ToDoInput = styled.input`
    display: block;
    width: 380px;

    padding: 5px 10px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #201F1D;

`
export const ToDoButton = styled.button`
    display: block;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    background-color: #EDBAAF;
`
export const ToDoUl= styled.ul`
    min-width: 460px;
    padding: 10px;
    margin: 15px 0;
`; 
export const ToDoLi= styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;  
    padding: 14px 5px;
    margin: 5px 0p;
    border-bottom: 1px solid #dbdbdb;

    &: last-child {
        border-bottom: 0;
    }
`; 

export const ToDoLabel= styled.label`
    width: 70%;
`;
export const EditInput= styled.input`
    display: block;
    width: 70%;

    padding: 2px 8px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #201F1D;
`; 
export const ButtonWrap= styled.div`
    width: 20%;
`; 

export const ToDoItemButton = styled.button`
    background-color: #fff;
    padding: 4px 6px;
    border: 1px solid #201F1D;
    border-radius: 3px;
    margin-right: 4px;
    transition: .2s

    &: last-child {
        margin-right: 0;
    }
    &: hover {
        background-color: #201F1D;
        color: #fff;
        transition: .2s
    }
`