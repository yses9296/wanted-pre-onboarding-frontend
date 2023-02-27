import { AxiosResponse, AxiosError } from 'axios';
import {
	CreateTodoRequestProps,
	DeleteTodoRequestProps,
	UpdateTodoRequestProps,
} from './todoApi.type';
import {
	createTodoInstance,
	deleteTodoInstance,
	renderTodosInstance,
	updateTodoInstance,
} from './todoApiInstance';

export function renderTodosRequest() {
	return renderTodosInstance();
}

export async function createTodoRequest({ todo }: CreateTodoRequestProps) {
	return createTodoInstance({ todo });
}

export async function updateTodoReqeust({ id, todo, isCompleted }: UpdateTodoRequestProps) {
	return updateTodoInstance({ id, todo, isCompleted });
}

export async function deleteTodoReqeust({ id }: DeleteTodoRequestProps) {
	return deleteTodoInstance({ id });
}
