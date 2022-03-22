import React, { useContext } from 'react';

import ListItem from './ListItem';
import { TodosContext } from '../store/todo-context';

import classes from './Todos.module.css';

const Todos: React.FC = () =>{
	const todoCtx = useContext(TodosContext)
	return (
		<ul className={classes.todos}>
			{todoCtx.items.map((item) => (
				<ListItem 
					key={item.id} 
					text={item.text} 
					itemClickHandler={todoCtx.removeTodo.bind(null, item.id)} 
				/>
			))}
		</ul>
	)
}

export default Todos;