import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-screen place-content-center text-zinc-950 bg-zinc-100 dark:text-zinc-50 dark:bg-zinc-800">
      <h1 className="text-3xl text-center">Ready to start with Tailwind!</h1>
      <button
        className={`
        block w-fit mx-auto my-8 px-4 py-2  
        rounded-lg border-2 border-cyan-500 hover:border-cyan-200
        transition-all duration-300
        `}
        onClick={() => setCount(count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
