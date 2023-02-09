import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
    const API_URL = ' https://pre-onboarding-selection-task.shop/'
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [signUpError, setSignUpError] = useState('');

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
            navigate("/signin");
        }).catch((err) => {
            setSignUpError(err.response.data);
        }).finally(() => {});
    }

    useEffect(() => {
        email.includes('@') && password.length > 7 ? setDisabled(false) : setDisabled(true);
    }, [email, password])

    useEffect(() => {
        if(ACCESS_TOKEN) {
            navigate("/todo");
        }
    }, [])

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="email" data-testid="email-input" value={email} placeholder='Email' onChange={onChangeEmail} required/>
                <input type="password" data-testid="password-input" value={password} placeholder='Password' onChange={onChangePassword} required/>
                <button data-testid="signup-button" disabled={disabled}>회원가입</button>
            </form>
            {signUpError && <p>{signUpError}</p>}
            <p>이미 회원이신가요?</p> <Link to='/signin'>로그인</Link>
        </div>
    )
}

export default SignUp