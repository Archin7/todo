import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
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
    setTodos([...todos, text]);
    setText("");
  }

  const todos_list = todos.map((todo, index) => {
    return (
      <li key={index} className="flex items-center justify-center">
        <button
          className="m-2 h-6 w-6 rounded-2xl bg-red-500 text-slate-800 outline-2 outline-slate-800 cursor-pointer duration-200 hover:bg-red-400"
          onClick={() => setTodos(todos.filter((_, i) => i !== index))}
        >
          <IoMdClose size={24} />
        </button>

        <span className="font-medium text-slate-800">{todo}</span>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="todos">
        <ol>{todos_list}</ol>
      </div>
      <div className="flex">
        <input
          type="text"
          className="outline-2 outline-slate-800 m-2 p-1 rounded-2xl bg-slate-400 text-slate-800 font-medium duration-200 hover:bg-slate-300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="outline-2 outline-slate-800 m-2 p-1 rounded-2xl bg-slate-400 cursor-pointer text-slate-800 font-medium duration-200 hover:bg-slate-300"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
