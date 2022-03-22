import classes from './ListItem.module.css';

const ListItem: React.FC<{ text: string; itemClickHandler: () => void }> = (props) => {
	return <li className={classes.item} onClick={props.itemClickHandler}>{props.text}</li>;
};

export default ListItem;