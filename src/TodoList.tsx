import React, {useEffect, useState} from 'react';
import { IApp, TodoItem} from "./types";

export const TodoList: React.FC<IApp> = (props) => {
    const [todos, setTodos] = useState<TodoItem[]>(props.todos);
    const [filter, setFilter] = useState<'all' | 'undone'>('all');
    const [doneCount, setDoneCount] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setFilter('all');
    }, [todos.length]);


    const addTodo = () => {
        const title = prompt('What to do?', '');
        if (title && title.length > 0){
            setTodos([...todos, {
                id: + new Date(),
                title,
                isDone: false
            }]);
            setCount(count + 1);
        }
    };

    const markAsDone = (todo: TodoItem) => {
        const index = todos.findIndex((item) => item.id === todo.id);

        if (index >= 0) {
            todos.splice(index, 1, {...todo, isDone: true});
            setTodos(todos);
        }

        setDoneCount(doneCount + 1);
    };

    const markAsUndone = (todo: TodoItem) => {
        const index = todos.findIndex((item) => item.id === todo.id);

        if (index >= 0) {
            todos.splice(index, 1, {...todo, isDone: false});
            setTodos(todos);
        }

        setDoneCount(doneCount - 1);
    };

    const deleteTodo = (todo: TodoItem) => {
        const index = todos.findIndex((item) => item.id === todo.id);

        if (index >= 0) {
            todos.splice(index, 1);

            setTodos(todos);
            setCount(count - 1);

            if(todo.isDone){
                setDoneCount(doneCount - 1);
            }
        }
    };

    const onFilterButtonClick = () => {
        filter === 'all' ? setFilter('undone') : setFilter('all');
    };

    const btn = (todo: TodoItem) => {
        if (todo.isDone){
            return <button onClick={() => markAsUndone(todo)}>{'Undone'}</button>
        } else {
            return <button onClick={() => markAsDone(todo)}>{'Done'}</button>
        }
    };

    return(
        <div>
            <p>{`${doneCount} / ${count}`}</p>
            <ul>
                {todos.filter((todo) => (filter === 'undone')? !todo.isDone : todo)
                    .map((todo) => (
                        <div key={`${todo.id}`}>
                            <p>{`${todo.isDone ? '✅ ' : ''}${todo.title}`}</p>
                            {btn(todo)}
                            <button onClick={() => deleteTodo(todo)}>{'Delete'}</button>
                        </div>
                    ))}
            </ul>
            <button onClick={addTodo}>{'Add'}</button>
            <button onClick={onFilterButtonClick}>
                {`Show ${filter === 'all' ? 'undone' : 'all'} todos`}
            </button>
        </div>
    )
};
