import { useState } from "react";
import useWrapper from "../hooks/useWrapper";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import { Todo } from "../type/todo";

function TodoWrapper() {
    const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useWrapper();
    const filterTabs = ["All", "Done", "Uncompleted"];
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
    const handleTabClick = (index: number) => {
        setActiveTabIndex(index)
    }
    const filterTodos = (todos: Todo[]): Todo[] => {
        if (activeTabIndex === 0) { return todos }
        if (activeTabIndex === 1) { return todos.filter(todo => todo.completed) }
        if (activeTabIndex === 2) { return todos.filter(todo => !todo.completed) }
        return todos;
    }
    return <>
        <div className="flex w-full">
            <InputTodo addTodo={addTodo} />
        </div>
        <div className="flex gap-3">
            {filterTabs.map((tab, index) => <button className={`btn btn-ghost ${index === activeTabIndex && "btn-active"}`} key={index}
                onClick={() => handleTabClick(index)}
            >{tab}</button>)}
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
            {filterTodos(todos).map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />)}
        </ul>
    </>;
}
export default TodoWrapper;
