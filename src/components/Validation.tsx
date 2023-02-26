type ValidationResponse = {
	valid: boolean;
	message: {
		email?: string;
		password?: string;
	};
};

function Validation({ email, password }: { email: string; password: string }): ValidationResponse {
	const EMAIL_CHECK = new RegExp('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*');
	const PW_CHECK = new RegExp('/^.{8,}$/');

	const emailValid = EMAIL_CHECK.test(email);
	const passwordValid = PW_CHECK.test(password);

	return {
		valid: Boolean(emailValid && passwordValid),
		message: {
			email: emailValid ? '' : '@를 포함한 이메일 형식이 아닙니다.',
			password: passwordValid ? '' : '8자 이상의 비밀번호가 아닙니다.',
		},
	};
}

export default Validation;
