import { clientAuthAPI } from 'apis/clientAPI';
import {
	Todo,
	CreateTodoRequestProps,
	DeleteTodoRequestProps,
	UpdateTodoRequestProps,
} from 'apis/todo/todoApi.type';

export const renderTodosInstance = async () => {
	return await clientAuthAPI.get<Todo[]>(`todos`);
};
export const createTodoInstance = async ({ todo }: CreateTodoRequestProps) => {
	return await clientAuthAPI.post<Todo>(`todos`, { todo });
};
export const updateTodoInstance = async ({ id, todo, isCompleted }: UpdateTodoRequestProps) => {
	return await clientAuthAPI.put<Todo>(`todos/${id}`, { todo, isCompleted });
};
export const deleteTodoInstance = async ({ id }: DeleteTodoRequestProps) => {
	return await clientAuthAPI.delete(`todos/${id}`);
};
