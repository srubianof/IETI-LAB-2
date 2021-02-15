import React from 'react';
import {Todo} from "../Todo/Todo";

const TodoList = ({todoList}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Due Date</th>
            </tr>
            </thead>
            <tbody>
            {todoList.map((item,index)=>{
                return(
                    <Todo key={index} text={item.text} priority={item.priority} dueDate={item.dueDate}/>
                );
            })}
            </tbody>
        </table>);
}
export default TodoList;
