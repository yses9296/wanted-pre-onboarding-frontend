import { clientAuthAPI } from 'apis/clientAPI';
import { Auth, SignInResponseAuth, SignUpResponseAuth } from 'apis/auth/authApi.type';

export const signUpInstance = async ({ email, password }: Auth) => {
	return await clientAuthAPI.post<SignUpResponseAuth>(`signup`, { email, password });
};
export const signInInstance = async ({ email, password }: Auth) => {
	return await clientAuthAPI.post<SignInResponseAuth>(`signIn`, { email, password });
};
