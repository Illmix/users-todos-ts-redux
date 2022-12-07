import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const {todos, loading, page, limit, error} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions();
    useEffect(()=> {fetchTodos(page, limit)}, [page])
    const pages = [1, 2, 3, 4, 5]
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error. {error}</h1>
    }

    return (
        <div>
            {
                todos.length === 0
                ?
                <button onClick={()=>fetchTodos(page, limit)}> GET TODOS </button>
                :
                <h4>TODOS: </h4>
            }
            {todos.map(todo =>
                <div key={todo.id}>{todo.title}</div>
            )}
            {
                todos.length !== 0
                ?
                <div style={{display: "flex"}}>
                    {pages.map(p => <p
                        key={p}
                        onClick={()=>setTodoPage(p)}
                        style={{
                        border:p === page ? "2px solid green" : "1px solid grey",
                        padding: 5,
                        margin: 7,
                        cursor: "pointer"
                    }}>{p}</p>)}
                </div>
                :
                <div></div>
            }
        </div>
    );
};

export default TodoList;