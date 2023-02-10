import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Header, Form, Input, Button, Error, LinkItem } from '../styles';

const SignUp = () => {
    const API_URL = ' https://pre-onboarding-selection-task.shop/'
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post(`${API_URL}auth/signup`, {
            email: email,
            password: password
        }).then((response) => {
            alert('회원가입에 성공하였습니다. 로그인을 시도해주세요.')
            navigate("/signin");
        }).catch((error) => {
            if (error.response.status === 400) {
                alert('이미 존재하는 이메일입니다.');
                navigate("/");
            }
        }).finally(() => {});
    }

    useEffect(() => {
        email.includes('@') && password.length > 7 ? setDisabled(false) : setDisabled(true);
    }, [email, password])

    useEffect(() => {
        if(ACCESS_TOKEN) {
            navigate("/todo");
        }
    }, [ACCESS_TOKEN, navigate])

    return (
        <Container>
            <Header>회원가입</Header>
            <Form onSubmit={onSubmitHandler}>
                <Input type="email" data-testid="email-input" value={email} placeholder='Email' onChange={onChangeEmail} required/>
                <Input type="password" data-testid="password-input" value={password} placeholder='Password' onChange={onChangePassword} required/>
                <Button data-testid="signin-button" disabled={disabled}>회원가입</Button>
            </Form>

            <p>이미 회원이신가요?</p> <LinkItem to='/signin'>로그인</LinkItem>
        </Container>
    )
}

export default SignUp