import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Lists from "./Lists";
import "./Todo.css";

function Todo() {
  return (
    <>
      <Nav />
      <div id="notes">
        <Sidebar />
        <Lists />
      </div>
    </>
  );
}
export default Todo;
