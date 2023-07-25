import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
	todo: Todo;
	toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
			/>
			<span
				style={{ textDecoration: todo.completed ? "line-through" : "none" }}
			>
				{todo.text}
			</span>
		</li>
	);
};

export default TodoItem;
