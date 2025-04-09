import ThemeControler from "./ThemeControler";

function Navbar() {
    return <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <a className="btn btn-ghost text-xl">TodoList</a>
        <ThemeControler />
    </div>
}
export default Navbar;
