import SignForm from '../components/auth/SignForm';

const SignUpPage = () => {
	return (
		<>
			<h1>회원가입</h1>
			<SignForm page={'signup'} />
		</>
	);
};

export default SignUpPage;
