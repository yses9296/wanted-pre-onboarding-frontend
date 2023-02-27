import TodoContext from 'context/todo/todoContext';
import { useContext, useState } from 'react';

const TodoForm = () => {
	const [todo, setTodo] = useState('');

	const { createTodo } = useContext(TodoContext);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createTodo({ todo });
	};
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="할 일을 추가하세요."
					value={todo}
					onChange={e => setTodo(e.target.value)}
				/>
				<button>추가</button>
			</form>
		</>
	);
};

export default TodoForm;
