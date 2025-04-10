import { useEffect, useMemo, useState } from "react";
import { Todo } from "../type/todo";

export default function useWrapper() {
  const savedTodos = localStorage.getItem("savedTodos");
  const [todos, setTodos] = useState<Todo[]>(() =>
    savedTodos ? JSON.parse(savedTodos) : []
  );
  const addTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };
  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id: string, text: string): void => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todos));
  }, [todos]);

  const [activeTab, setActiveTab] = useState<number>(0);

  const filteredTodos = useMemo(() => {
    if (activeTab === 0) return todos;
    return activeTab === 1
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);
  }, [todos, activeTab]);

  return {
    activeTab,
    filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    setActiveTab,
  };
}
