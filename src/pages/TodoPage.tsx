import { useContext } from 'react';
import AuthContext from 'context/auth/authContext';
import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import TodoProvider from 'context/todo/todoProvider';
import Layout from 'components/common/Layout';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const TodoPage = () => {
	const { signOut } = useContext(AuthContext);

	const onClickLogout = () => {
		const confirmed = window.confirm('로그아웃 하시겠습니까?');
		if (confirmed) {
			signOut();
		}
	};

	return (
		<Layout>
			<TodoProvider>
				<nav className="w-full flex justify-center items-center relative mb-10">
					<h2 className="text-4xl font-extrabold text-center ">Todo List</h2>
					<button
						onClick={onClickLogout}
						className="absolute right-0 bg-slate-300 px-6 py-1 rounded font-bold uppercase "
					>
						<ArrowRightOnRectangleIcon className="h-6 w-6 text-white" />
					</button>
				</nav>
				<div className="w-3/5 flex items-center flex-col border-2 rounded-md shadow-lg px-20 py-4">
					<TodoForm />
					<TodoList />
				</div>
			</TodoProvider>
		</Layout>
	);
};

export default TodoPage;
