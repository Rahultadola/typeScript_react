import React from 'react';
import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todo-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const todosCtx = useContext(TodosContext);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			//throw an error
			return;
		}

		todosCtx.addTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='text'>Todo Text</label>
			<input type="text" id="text" ref={todoTextInputRef}/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodo;