import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

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
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post(`${API_URL}auth/signin`, {
            email: email,
            password: password
        }).then((response) => {
            localStorage.setItem("ACCESS_TOKEN", response.data.access_token)
            navigate("/todo");
        }).catch((err) => {
            setSignInError(err.response.data);
        }).finally(() => {});
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
        <div>
            <h2>로그인</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="email" data-testid="email-input" value={email} placeholder='Email' onChange={onChangeEmail} required/>
                <input type="password" data-testid="password-input" value={password} placeholder='Password' onChange={onChangePassword} required/>
                <button data-testid="signin-button" disabled={disabled}>로그인</button>
            </form>
            {signInError && <p>{signInError}</p>}
            <p>아직 회원가입을 안하셨나요? </p> <Link to='/signup'>회원가입</Link>
        </div>
    )
}

export default SignIn