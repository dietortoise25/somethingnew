import { useState } from "react";
import { Todo } from "../type/todo";
import { v4 as uuid } from "uuid";

function InputTodo({ addTodo }: { addTodo: (todo: Todo) => void }) {
    const [newTodotext, setNewTodotext] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTodotext === "") {
            return;
        }
        // TODO: add todo to the list
        addTodo({ id: uuid(), text: newTodotext, completed: false });
        setNewTodotext("");
    }

    return <form className="join w-full" onSubmit={handleSubmit}>
        <div className="flex-1">
            <label className="input validator join-item w-full flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <input className="w-full" type="text" placeholder="buy a book" required value={newTodotext} onChange={e => setNewTodotext(e.target.value)} />
            </label>
        </div>
        <button className="btn btn-neutral join-item text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </form>
}
export default InputTodo;
