import SignForm from '../components/auth/SignForm';

const SignInPage = () => {
	return (
		<>
			<h1>로그인</h1>
			<SignForm page={'signin'} />
		</>
	);
};

export default SignInPage;
