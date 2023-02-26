import { AxiosResponse, AxiosError } from 'axios';
import { signUpInstance, signInInstance } from 'apis/auth/authApiInstance';
import { Auth, SignUpResponseAuth, SignInResponseAuth } from 'apis/auth/authApi.type';

export async function signup({ email, password }: Auth): Promise<SignUpResponseAuth> {
	return new Promise((resolve, reject) => {
		let errMsg: string = '';
		signUpInstance({ email, password })
			.then((res: AxiosResponse) => {
				resolve({ message: '회원가입에 성공하였습니다. 로그인을 시도해주세요.' });
			})
			.catch((error: AxiosError) => {
				const status = error.response?.status;
				if (status === 400) {
					errMsg = '이미 존재하는 이메일입니다.';
				} else {
					errMsg = '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
				}
				reject({ message: errMsg });
			});
	});
}

export async function signin({ email, password }: Auth): Promise<SignInResponseAuth> {
	return new Promise((resolve, reject) => {
		signInInstance({ email, password })
			.then((res: AxiosResponse) => {
				resolve({ accessToken: res.data.access_token });
			})
			.catch((error: AxiosError) => {
				const status = error.response?.status;
				let errMsg: string = '';
				if (status === 401) {
					errMsg = '이메일 또는 비밀번호가 일치하지 않습니다.';
				} else if (status === 404) {
					errMsg = '사용자를 찾을 수 없습니다. 다시 시도해 주세요.';
				} else {
					errMsg = '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
				}
				reject({ message: errMsg });
			});
	});
}
