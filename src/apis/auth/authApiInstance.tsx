import { clientAuthAPI } from 'apis/clientAPI';
import { Auth } from 'apis/auth/authApi.type';

export const signUpInstance = async ({ email, password }: Auth) => {
	return await clientAuthAPI.post(`auth/signup`, { email, password });
};
export const signInInstance = async ({ email, password }: Auth) => {
	return await clientAuthAPI.post(`auth/signIn`, { email, password });
};
