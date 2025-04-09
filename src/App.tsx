import Navbar from "./components/Navbar";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return <div className="flex flex-col gap-2 mx-auto p-10 max-w-[800px]">
    <Navbar />
    <TodoWrapper />
  </div>;
}
export default App;
