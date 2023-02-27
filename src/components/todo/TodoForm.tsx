import TodoContext from 'context/todo/todoContext';
import { useContext, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const TodoForm = () => {
	const [todo, setTodo] = useState('');

	const { createTodo } = useContext(TodoContext);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createTodo({ todo });
	};
	return (
		<>
			<form onSubmit={onSubmitHandler} className="flex items-center">
				<input
					type="text"
					placeholder="할 일을 추가하세요."
					value={todo}
					onChange={e => setTodo(e.target.value)}
					className="w-96 border-b-2 mr-3 px-4 py-2"
				/>
				<button className="bg-slate-600 text-white px-3 py-2 rounded">
					<PlusIcon className="w-6 h-6" />
				</button>
			</form>
		</>
	);
};

export default TodoForm;
