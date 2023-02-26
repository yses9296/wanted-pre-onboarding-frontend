import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext, { AuthContextType } from 'context/auth/authContext';

import { signup as signUpRequest, signin as signInRequest } from 'apis/auth/authApi';
import { Auth } from 'apis/auth/authApi.type';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

function AuthProvider({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate();
	const [hasToken, setHasToken] = useState(false);

	const signUp: AuthContextType['signUp'] = ({ email, password }: Auth) => {
		signUpRequest({ email, password })
			.then(res => {
				alert(res.message);
				navigate('/signin');
			})
			.catch(err => alert(err.message));
	};

	const signIn: AuthContextType['signUp'] = ({ email, password }: Auth) => {
		signInRequest({ email, password })
			.then(res => {
				localStorage.setItem(ACCESS_TOKEN, res.accessToken);
				navigate('/todo');
			})
			.catch(err => alert(err.message));
	};

	const signOut = () => {
		localStorage.removeItem(ACCESS_TOKEN);
		setHasToken(false);
		navigate('/signin');
	};

	useEffect(() => {
		setHasToken(localStorage.getItem(ACCESS_TOKEN) ? true : false);
	}, []);

	return (
		<AuthContext.Provider value={{ hasToken, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
