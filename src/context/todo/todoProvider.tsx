import { useEffect, useState } from 'react';
import TodoContext, { TodoContextType } from 'context/todo/todoContext';

import {
	renderTodosRequest,
	createTodoRequest,
	updateTodoReqeust,
	deleteTodoReqeust,
} from 'apis/todo/todoApi';
import { Todo } from 'apis/todo/todoApi.type';

function TodoProvider({ children }: { children: React.ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);

	const renderTodos = async () => {
		try {
			const response = await renderTodosRequest();
			setTodos(response.data);
		} catch (error) {
			alert(error);
		}
	};

	const createTodo: TodoContextType['createTodo'] = async props => {
		try {
			await createTodoRequest(props);
			renderTodos();
		} catch (error) {
			alert(error);
		}
	};

	const updateTodo: TodoContextType['updateTodo'] = async props => {
		try {
			await updateTodoReqeust(props);
			renderTodos();
		} catch (error) {
			alert(error);
		}
	};

	const deleteTodo: TodoContextType['deleteTodo'] = async props => {
		try {
			await deleteTodoReqeust(props);
			renderTodos();
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		renderTodos();
	}, []);

	return (
		<TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
			{children}
		</TodoContext.Provider>
	);
}

export default TodoProvider;
