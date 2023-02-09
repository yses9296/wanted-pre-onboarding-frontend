import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Header, Form, Input, Button, Error, LinkItem } from '../styles';

const SignIn = () => {
    const API_URL = ' https://pre-onboarding-selection-task.shop/'
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [signInError, setSignInError] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}auth/signin`, {
                email: email,
                password: password
            })

            if(response.status === 200){
                localStorage.setItem("ACCESS_TOKEN", response.data.access_token)
                navigate("/todo");
                setSignInError('');
            }
        }
        catch(error){
            if (error.response.status === 401) {
                setSignInError('이메일 또는 비밀번호가 일치하지 않습니다.')
            }
            else if(error.response.status === 404){
                setSignInError('사용자를 찾을 수 없습니다. 다시 시도해 주세요.')
            }
        }
    }

    useEffect(() => {
        email.includes('@') && password.length > 7 ? setDisabled(false) : setDisabled(true);
    }, [email, password])

    useEffect(() => {
        if(ACCESS_TOKEN) {
            navigate("/todo");
        }
    })

    return (
        <Container>
            <Header>로그인</Header>
            <Form onSubmit={onSubmitHandler}>
                <Input type="email" data-testid="email-input" value={email} placeholder='Email' onChange={onChangeEmail} required/>
                <Input type="password" data-testid="password-input" value={password} placeholder='Password' onChange={onChangePassword} required/>
                <Button data-testid="signin-button" disabled={disabled}>로그인</Button>
            </Form>
            {signInError && <Error>{signInError}</Error>}
            <p>아직 회원이 아니신가요? </p> <LinkItem to='/signup'>회원가입</LinkItem>
        </Container>
    )
}

export default SignIn