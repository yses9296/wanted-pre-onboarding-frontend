import Layout from 'components/common/Layout';
import SignForm from '../components/auth/SignForm';

const SignUpPage = () => {
	return (
		<Layout>
			<h1 className="text-center text-4xl font-extrabold mb-6">회원가입</h1>
			<SignForm page={'signup'} />
		</Layout>
	);
};

export default SignUpPage;
