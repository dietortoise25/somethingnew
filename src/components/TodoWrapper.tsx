import useWrapper from "../hooks/useWrapper";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import Filter from "./Filter";

function TodoWrapper() {
    const { filteredTodos, activeTab, addTodo, toggleTodo, deleteTodo, updateTodo, setActiveTab } = useWrapper();
    return <>
        <div className="flex w-full">
            <InputTodo addTodo={addTodo} />
        </div>
        <Filter
            activeTab={activeTab}
            onTabChange={setActiveTab}
        />
        <ul className="list bg-base-100 rounded-box shadow-md">
            {filteredTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </ul>
    </>;
}
export default TodoWrapper;
