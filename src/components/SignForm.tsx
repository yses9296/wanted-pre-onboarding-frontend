import { signin, signup } from 'apis/auth/authApi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';

const SignForm = ({ page }: { page: string }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [focusOn, setFocusOn] = useState({
		email: false,
		password: false,
	});

	const focusOnHandler = (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => {
		setFocusOn({
			...focusOn,
			[e.target.name]: value,
		});
	};

	const { valid: isValidForm, message: validMsg } = Validation({ email, password });

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		page === 'signup'
			? signup({ email, password })
					.then(res => {
						alert(res.message);
						navigate('/signin');
					})
					.catch(err => alert(err.message))
			: signin({ email, password })
					.then(res => {
						localStorage.setItem('ACCESS_TOKEN', res.accessToken);
						navigate('/todo');
					})
					.catch(err => alert(err.message));
	};
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<p>
					<label>이메일</label>
					<input
						type="email"
						name="email"
						data-testid="email-input"
						placeholder="@를 포함한 형식의 이메일을 입력해주세요."
						value={email}
						onChange={e => setEmail(e.target.value)}
						onFocus={e => {
							focusOnHandler(e, true);
						}}
						onBlur={e => {
							focusOnHandler(e, false);
						}}
					/>
				</p>
				{focusOn.email && validMsg?.email ? <strong>{validMsg.email}</strong> : null}

				<p>
					<label>비밀번호</label>
					<input
						type="password"
						name="password"
						data-testid="password-input"
						placeholder="8자 이상의 비밀번호를 입력해주세요"
						value={password}
						onChange={e => setPassword(e.target.value)}
						onFocus={e => {
							focusOnHandler(e, true);
						}}
						onBlur={e => {
							focusOnHandler(e, false);
						}}
					/>
				</p>
				{focusOn.password && validMsg?.password ? <strong>{validMsg.password}</strong> : null}

				<button disabled={!isValidForm}>{page === 'signup' ? '회원가입' : '로그인'}</button>
			</form>

			{page === 'signup' ? (
				<p>
					이미 회원이신가요? <Link to="/signin">로그인</Link>
				</p>
			) : (
				<p>
					아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
				</p>
			)}
		</>
	);
};

export default SignForm;
