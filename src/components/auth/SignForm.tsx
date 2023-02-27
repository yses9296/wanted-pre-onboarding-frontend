import AuthContext from 'context/auth/authContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Validation from '../auth/Validation';

const SignForm = ({ page }: { page: string }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [focusOn, setFocusOn] = useState({
		email: false,
		password: false,
	});

	const { signUp, signIn } = useContext(AuthContext);

	const focusOnHandler = (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => {
		setFocusOn({
			...focusOn,
			[e.target.name]: value,
		});
	};

	const { valid: isValidForm, message: validMsg } = Validation({ email, password });

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		page === 'signup' ? signUp({ email, password }) : signIn({ email, password });
	};

	return (
		<div className="w-full flex flex-col items-center">
			<form onSubmit={onSubmitHandler} className="w-96 flex flex-col mb-6">
				{/* <p> */}
				<label className="w-full text-left text-lg font-bold mb-1">이메일</label>
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
					className="w-full border-2 rounded px-1 py-2 mb-3"
				/>
				{/* </p> */}
				{focusOn.email && <strong className="text-red-500 mb-3 ">{validMsg.email}</strong>}

				{/* <p> */}
				<label className="w-full text-left text-lg font-bold mb-1">비밀번호</label>
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
					className="w-full border-2 rounded px-1 py-2 mb-3"
				/>
				{/* </p> */}
				{focusOn.password && <strong className="text-red-500 mb-3 ">{validMsg.password}</strong>}

				<button
					disabled={!isValidForm}
					className="bg-slate-300 rounded-sm px-7 py-2 mt-3 disabled:opacity-50"
				>
					{page === 'signup' ? '회원가입' : '로그인'}
				</button>
			</form>

			{page === 'signup' ? (
				<p>
					이미 회원이신가요?{' '}
					<Link to="/signin" className="font-bold text-sky-900">
						로그인
					</Link>
				</p>
			) : (
				<p>
					아직 회원이 아니신가요?{' '}
					<Link to="/signup" className="font-bold text-sky-900">
						회원가입
					</Link>
				</p>
			)}
		</div>
	);
};

export default SignForm;
