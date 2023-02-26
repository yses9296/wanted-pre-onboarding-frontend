import { Auth } from 'apis/auth/authApi.type';
import { createContext } from 'react';

export {};

export type AuthContextType = {
	hasToken: boolean;
	signIn: (props: Auth) => void;
	signUp: (props: Auth) => void;
	signOut: VoidFunction;
};

const AuthContext = createContext<AuthContextType>({
	hasToken: false,
	signIn: () => {},
	signUp: () => {},
	signOut: () => {},
});

export default AuthContext;
