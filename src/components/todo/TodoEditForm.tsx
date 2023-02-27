import { useState } from 'react';
import { Todo } from 'apis/todo/todoApi.type';
import { useTodo } from 'context/todo/todoContext';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

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
			<form
				onSubmit={onSubmitHandler}
				className="w-full flex flex-row justify-between items-center py-2 border-b"
			>
				<input
					type="text"
					placeholder="할 일을 추가하세요."
					value={value}
					onChange={e => setValue(e.target.value)}
					className="w-2/3 bg-slate-200 px-3 py-2 rounded"
				/>
				<div className="flex items-center">
					<button className="mr-2">
						<CheckIcon className="h-6 w-6" />
					</button>
					<button
						onClick={() => {
							toggleEdit();
						}}
					>
						<XMarkIcon className="h-6 w-6" />
					</button>
				</div>
			</form>
		</>
	);
};

export default TodoEditForm;
