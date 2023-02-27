import { useState } from 'react';
import { Todo } from 'apis/todo/todoApi.type';
import { useTodo } from 'context/todo/todoContext';

const TodoEditForm = ({ item, toggleEdit }: { item: Todo; toggleEdit: () => void }) => {
	const [value, setValue] = useState<string>(item.todo);
	const { updateTodo } = useTodo();

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateTodo({ ...item, todo: value });
		setValue('');
		toggleEdit();
	};
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="할 일을 추가하세요."
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button>완료</button>
				<button
					onClick={() => {
						toggleEdit();
					}}
				>
					취소
				</button>
			</form>
		</>
	);
};

export default TodoEditForm;
