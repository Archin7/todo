function TodoAdd({
  text,
  handleClick,
  onChange,
}: {
  text: string;
  handleClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        type="text"
        className="transition  m-2 p-1 rounded-2xl bg-white/40 backdrop-blur-sm text-sky-950/50 font-medium duration-200 hover:bg-white/70 hover:shadow-lg shadow-gray-900/25"
        value={text}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <button
        className="transition  m-2 p-1 rounded-2xl bg-white/40 cursor-pointer text-sky-950/50 text-ms font-medium duration-200 hover:bg-white/70 active:scale-100 hover:scale-110 hover:shadow-lg shadow-gray-900/25"
        onClick={handleClick}
      >
        Add
      </button>
    </>
  );
}

export default TodoAdd;
