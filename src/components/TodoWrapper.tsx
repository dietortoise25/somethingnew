import { useState } from "react";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import { Todo } from "../type/todo";

function TodoWrapper() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: "1", text: "buy a book", completed: false },
        { id: "2", text: "learn something", completed: false },
        { id: "3", text: "have a sleep", completed: false }
    ]);
    const addTodo = (todo: Todo): void => {
        setTodos([...todos, todo]);
    }
    const toggleTodo = (id: string): void => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }
    const deleteTodo = (id: string): void => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return <>
        <div className="flex w-full">
            <InputTodo addTodo={addTodo} />
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </ul>
    </>;
}
export default TodoWrapper;
