import { IoMdClose } from "react-icons/io";

function TodoItem({
  index,
  todo,
  removing,
  setRemoving,
  setTodos,
  todos,
}: {
  index: number;
  todo: string;
  removing: number | null;
  setRemoving: (num: number | null) => void;
  setTodos: (todos: string[]) => void;
  todos: string[];
}) {
  return (
    <>
      <li
        key={index}
        className={`flex items-center justify-center px-4 py-2 ${
          removing === index
            ? "animate-[todo-out_500ms_ease-in]"
            : "animate-[todo-in_500ms_ease-out]"
        }`}
      >
        <button
          className="m-2 h-6 w-6 rounded-2xl bg-red-500/70 text-white/80 cursor-pointer duration-200 hover:bg-red-400 active:scale-100 hover:scale-110 hover:shadow-lg shadow-gray-900/25"
          onClick={() => {
            setRemoving(index);

            setTimeout(() => {
              setTodos(todos.filter((_, i) => i !== index));
              setRemoving(null);
            }, 500);
          }}
        >
          <IoMdClose size={24} />
        </button>

        <span className="font-medium text-sky-950/50">{todo}</span>
      </li>
    </>
  );
}

export default TodoItem;
