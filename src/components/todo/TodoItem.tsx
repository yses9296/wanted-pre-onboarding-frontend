import { Todo } from 'apis/todo/todoApi.type';
import { useTodo } from 'context/todo/todoContext';
import { useState } from 'react';
import TodoEditForm from './TodoEditForm';

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
		<div>
			<div>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => {
						updateTodo({ ...item, isCompleted: !isCompleted });
					}}
				/>
				<p>{todo}</p>
			</div>
			<div>
				<button onClick={toggleEdit}>수정</button>
				<button onClick={onClickDeleteBtn}>삭제</button>
			</div>
		</div>
	);
};

export default TodoItem;
