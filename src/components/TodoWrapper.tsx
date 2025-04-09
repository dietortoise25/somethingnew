import { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import { Todo } from "../type/todo";

function TodoWrapper() {
    const savedTodos = localStorage.getItem("savedTodos");
    const [todos, setTodos] = useState<Todo[]>(() => savedTodos ? JSON.parse(savedTodos) : [])
    const addTodo = (todo: Todo): void => {
        setTodos([...todos, todo]);
    }
    const toggleTodo = (id: string): void => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }
    const deleteTodo = (id: string): void => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const updateTodo = (id: string, text: string): void => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text } : todo));
    }

    useEffect(() => {
        localStorage.setItem("savedTodos", JSON.stringify(todos));
    }, [todos])
    return <>
        <div className="flex w-full">
            <InputTodo addTodo={addTodo} />
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />)}
        </ul>
    </>;
}
export default TodoWrapper;
