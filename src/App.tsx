import { useEffect, useState } from "react";
import "./App.css";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [text, setText] = useState("");
  const [removing, setRemoving] = useState<number | null>(null);

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
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        removing={removing}
        setRemoving={setRemoving}
        setTodos={setTodos}
        todos={todos}
      />
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
      <div className="flex flex-row">
        <TodoAdd
          text={text}
          handleClick={handleClick}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TodoApp;
