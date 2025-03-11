import { useReducer, useEffect } from "react";
import { NdkTodoReducer } from "../reducers/NdkTodoReducer";
import NdkTodoItem from "./NdkTodoItem";
import NdkAddTodo from "./NdkAddTodo";

export default function NdkTodoList() {
    const [todos, dispatch] = useReducer(NdkTodoReducer, [], () => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh Sách Công Việc</h2>
            <NdkAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <NdkTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}
