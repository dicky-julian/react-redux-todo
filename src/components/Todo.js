import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toogleTodo } from '../redux/actions';

const Todo = ({ todo, toogleTodo }) => (
    <li className="todo-item" onClick={() => toogleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
         className={cx(
             "todo-item__text",
             todo && todo.completed && "todo-item__text--completed"
         )}>
             {todo.content}
         </span>
    </li>
);

export default connect(
    null,
    { toogleTodo }
)(Todo);