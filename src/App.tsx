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

  function handleClick() {
    if (!text) {
      return;
    }

    setTodos([...todos, text]);
    setText("");
  }

  const todos_list = todos.map((todo, index) => {
    return (
      <li key={index} className="flex items-center justify-center px-4 py-2 ">
        <button
          className="m-2 h-6 w-6 rounded-2xl bg-red-500/70 text-sky-950 outline-2 outline-sky-950 cursor-pointer duration-200 hover:bg-red-400 active:scale-100 hover:scale-110 hover:shadow-lg shadow-gray-900/25"
          onClick={() => setTodos(todos.filter((_, i) => i !== index))}
        >
          <IoMdClose size={24} />
        </button>

        <span className="font-medium text-sky-950">{todo}</span>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen shadow-2xl">
      <div className="todos">
        {todos.length > 0 && (
          <ol className="flex flex-col gap-1 m-1 rounded-xl bg-white/40 px-3 py-2 backdrop-blur-sm duration-200 hover:shadow-lg shadow-gray-900/25">
            {todos_list}
          </ol>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          className="transition  m-2 p-1 rounded-2xl bg-white/40 backdrop-blur-sm text-sky-950/50 font-medium duration-200 hover:bg-white/70 hover:shadow-lg shadow-gray-900/25"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="transition  m-2 p-1 rounded-2xl bg-white/40 cursor-pointer text-sky-950/50 text-ms font-medium duration-200 hover:bg-white/70 active:scale-100 hover:scale-110 hover:shadow-lg shadow-gray-900/25"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
