import { Link } from 'react-router-dom';
const SignForm = ({ page }: { page: string }) => {
	return (
		<>
			<form>
				<p>
					<label>이메일</label>
					<input type="text" placeholder="@를 포함한 형식의 이메일을 입력해주세요." />
				</p>

				<p>
					<label>비밀번호</label>
					<input type="text" placeholder="8자 이상의 비밀번호를 입력해주세요" />
				</p>
			</form>
			<p>
				{page === 'signup' ? (
					<p>
						이미 회원이신가요? <Link to="/signin">로그인</Link>
					</p>
				) : (
					<p>
						아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
					</p>
				)}
			</p>
		</>
	);
};

export default SignForm;
