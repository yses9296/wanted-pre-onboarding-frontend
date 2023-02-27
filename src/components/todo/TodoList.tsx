import { Todo } from 'apis/todo/todoApi.type';
import { useTodo } from 'context/todo/todoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { todos } = useTodo();

	return (
		<div>
			<h4>TodoList</h4>
			{todos.map(item => (
				<TodoItem
					key={item.id}
					id={item.id}
					todo={item.todo}
					isCompleted={item.isCompleted}
					userId={item.userId}
				/>
			))}
		</div>
	);
};

export default TodoList;
