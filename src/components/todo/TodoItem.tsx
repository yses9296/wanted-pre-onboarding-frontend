import { Todo } from 'apis/todo/todoApi.type';
import { useTodo } from 'context/todo/todoContext';
import { useState } from 'react';
import TodoEditForm from './TodoEditForm';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/solid';

const TodoItem = (item: Todo) => {
	const { id, todo, isCompleted } = item;
	const { updateTodo, deleteTodo } = useTodo();

	const [isEdit, setIsEdit] = useState<boolean>(false);
	const toggleEdit = () => setIsEdit(prev => !prev);

	const onClickDeleteBtn = () => {
		const confirmed = window.confirm('투두를 삭제하시겠습니까?');
		if (confirmed) {
			deleteTodo({ id });
		}
	};

	if (isEdit) {
		return <TodoEditForm item={item} toggleEdit={toggleEdit} />;
	}

	return (
		<div className="w-full flex flex-row justify-between py-2 border-b">
			<div className="w-2/3 flex flex-row items-center ">
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => {
						updateTodo({ ...item, isCompleted: !isCompleted });
					}}
					className="mr-3 w-4 y-4"
				/>
				{isCompleted ? <p className="line-through text-gray-300">{todo}</p> : <p>{todo}</p>}
			</div>
			<div className="flex flex-row">
				<button onClick={toggleEdit} className="mr-2">
					<PencilSquareIcon className="h-6 w-6" />
				</button>
				<button onClick={onClickDeleteBtn}>
					<XCircleIcon className="h-6 w-6" />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
