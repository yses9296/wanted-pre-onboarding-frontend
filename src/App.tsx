import AuthContext from 'context/auth/authContext';
import NotFoundPage from 'pages/NotFoundPage';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

function App() {
	const { hasToken } = useContext(AuthContext);

	return (
		<div>
			<h1>Todo List</h1>

			<Routes>
				<Route
					path="/"
					element={hasToken ? <Navigate to="/todo" replace /> : <Navigate to="/signin" replace />}
				/>
				<Route
					path="/signin"
					element={hasToken ? <Navigate to="/todo" replace /> : <SignInPage />}
				/>
				<Route
					path="/signup"
					element={hasToken ? <Navigate to="/todo" replace /> : <SignUpPage />}
				/>
				<Route path="/todo" element={hasToken ? <TodoPage /> : <Navigate to="/signin" replace />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
