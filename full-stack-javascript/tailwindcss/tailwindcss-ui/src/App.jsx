import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <div className="relative flex flex-col h-full gap-2 md:flex-row xl:gap-4">
          <Sidebar />
          <h1 className="text-3xl text-center">
            Ready to start with Tailwind!
          </h1>
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
      </Container>
    </>
  );
}

export default App;
