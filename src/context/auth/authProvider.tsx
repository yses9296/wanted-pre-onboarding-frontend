import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext, { AuthContextType } from 'context/auth/authContext';

import { signUpRequest, signInRequest } from 'apis/auth/authApi';
import { Auth } from 'apis/auth/authApi.type';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

function AuthProvider({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate();
	const [hasToken, setHasToken] = useState(false);

	const signUp: AuthContextType['signUp'] = async ({ email, password }: Auth) => {
		signUpRequest({ email, password })
			.then(response => {
				alert(response.message);
				navigate('/signin');
			})
			.catch(error => {
				alert(error.message);
			});
	};

	const signIn: AuthContextType['signIn'] = async ({ email, password }: Auth) => {
		signInRequest({ email, password })
			.then(response => {
				localStorage.setItem(ACCESS_TOKEN, response.accessToken);
				setHasToken(true);
				navigate('/todo');
			})
			.catch(error => {
				alert(error.message);
			});
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
