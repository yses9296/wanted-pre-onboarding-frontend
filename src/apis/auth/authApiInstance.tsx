import { clientAuthAPI } from 'apis/clientAPI';
import { Auth, SignInResponseAuth, SignUpResponseAuth } from 'apis/auth/authApi.type';

export const signUpInstance = ({ email, password }: Auth) => {
	return clientAuthAPI.post<SignUpResponseAuth>(`signup`, { email, password });
};
export const signInInstance = ({ email, password }: Auth) => {
	return clientAuthAPI.post<SignInResponseAuth>(`signIn`, { email, password });
};
