export interface Auth {
	email: string;
	password: string;
}

export type SignUpResponseAuth = { message: string };
export type SignInResponseAuth = { accessToken: string };
