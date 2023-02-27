import { clientTodoAPI } from 'apis/clientAPI';
import {
	Todo,
	CreateTodoRequestProps,
	DeleteTodoRequestProps,
	UpdateTodoRequestProps,
} from 'apis/todo/todoApi.type';

export const renderTodosInstance = async () => {
	return await clientTodoAPI.get<Todo[]>('todos');
};
export const createTodoInstance = async ({ todo }: CreateTodoRequestProps) => {
	return await clientTodoAPI.post<Todo>(`todos`, { todo });
};
export const updateTodoInstance = async ({ id, todo, isCompleted }: UpdateTodoRequestProps) => {
	return await clientTodoAPI.put<Todo>(`todos/${id}`, { todo, isCompleted });
};
export const deleteTodoInstance = async ({ id }: DeleteTodoRequestProps) => {
	return await clientTodoAPI.delete(`todos/${id}`);
};
