import { useState, useContext } from 'react';
import AuthContext from 'context/auth/authContext';
import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import TodoProvider from 'context/todo/todoProvider';

const TodoPage = () => {
	const { signOut } = useContext(AuthContext);

	const onClickLogout = () => {
		signOut();
	};

	return (
		<div>
			<TodoProvider>
				<nav>
					<h2>Todo List</h2>
					<button onClick={onClickLogout}>Logout</button>
				</nav>
				<div>
					<TodoForm />
					<TodoList />
				</div>
			</TodoProvider>
		</div>
	);
};

export default TodoPage;
