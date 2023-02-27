import {
	CreateTodoRequestProps,
	DeleteTodoRequestProps,
	Todo,
	UpdateTodoRequestProps,
} from 'apis/todo/todoApi.type';
import { createContext, useContext } from 'react';

export type TodoContextType = {
	todos: Todo[];
	createTodo: (props: CreateTodoRequestProps) => void;
	updateTodo: (props: UpdateTodoRequestProps) => void;
	deleteTodo: (props: DeleteTodoRequestProps) => void;
};

const TodoContext = createContext<TodoContextType>({
	todos: [],
	createTodo: () => {},
	updateTodo: () => {},
	deleteTodo: () => {},
});

export default TodoContext;

export function useTodo() {
	if (!TodoContext) throw new Error('no AuthContext');
	return useContext(TodoContext);
}
