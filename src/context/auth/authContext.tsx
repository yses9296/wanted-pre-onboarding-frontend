import { Auth } from 'apis/auth/authApi.type';
import { createContext } from 'react';

export type AuthContextType = {
	hasToken: boolean;
	signIn: (props: Auth) => void;
	signUp: (props: Auth) => void;
	signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
	hasToken: false,
	signIn: () => {},
	signUp: () => {},
	signOut: () => {},
});

export default AuthContext;
