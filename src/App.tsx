import { useEffect, useState } from "react";
import "./App.css";

function TodoApp() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Runs when todo changes

  const todos_copy = todos.slice();

  function handleClick() {
    todos_copy.push(text);
    setTodos(todos_copy);
  }

  const todos_list = todos.map((todo, index) => {
    return (
      <li key={index}>
        <div className="todo">
          <button
            className="remove-todo"
            onClick={() => setTodos(todos.filter((_, i) => i !== index))}
          >
            X
          </button>{" "}
          {todo}
        </div>
      </li>
    );
  });

  return (
    <div>
      <div className="todos">
        <ol>{todos_list}</ol>
      </div>
      <div className="flex">
        <input
          type="text"
          className="outline-2 outline-slate-800 m-2 p-1 rounded-2xl bg-slate-400 text-slate-800 font-medium"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="outline-2 outline-slate-800 m-2 p-1 rounded-2xl bg-slate-400 cursor-pointer text-slate-800 font-medium"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
