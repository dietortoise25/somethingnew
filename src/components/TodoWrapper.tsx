import useWrapper from "../hooks/useWrapper";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";

function TodoWrapper() {
    const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useWrapper();

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
