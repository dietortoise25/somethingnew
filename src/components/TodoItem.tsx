import { useState } from "react";
import { Todo } from "../type/todo";

type TodoItemProps = {
    todo: Todo, toggleTodo: (id: string) => void,
    deleteTodo: (id: string) => void,
    updateTodo: (id: string, text: string) => void
};

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(todo.text);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            return;
        }
        updateTodo(todo.id, inputValue);
        setIsEditing(false);
    }

    return (<li className="list-row flex justify-between hover:bg-accent-content">
        <div className="flex items-center gap-5">
            <input type="checkbox" className="checkbox"
                checked={todo.completed}
                onChange={
                    toggleTodo.bind(null, todo.id)
                }
            />
            {!isEditing && <div>{todo.text}</div>}
            {isEditing &&
                <form className="flex" onSubmit={handleSubmit}>
                    <input type="text" className="input input-bordered w-full" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                    <button type="submit" className="btn btn-square btn-ghost" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </button>
                </form>}
        </div>
        {!isEditing &&
            <div>
                <button className="btn btn-square btn-ghost" onClick={() => setIsEditing(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>
                <button className="btn btn-square btn-ghost" onClick={() => deleteTodo(todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>}

    </li>)


}
export default TodoItem;
