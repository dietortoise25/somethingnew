import Navbar from "./components/Navbar";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return <div className="w-[500px] flex-col gap-2 mt-5 mx-auto">
    <Navbar />
    <TodoWrapper />
  </div>;
}
export default App;
