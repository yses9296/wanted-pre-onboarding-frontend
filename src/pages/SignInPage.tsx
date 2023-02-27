import Layout from 'components/common/Layout';
import SignForm from '../components/auth/SignForm';

const SignInPage = () => {
	return (
		<Layout>
			<h1 className="text-center text-4xl font-extrabold mb-6">로그인</h1>
			<SignForm page={'signin'} />
		</Layout>
	);
};

export default SignInPage;
