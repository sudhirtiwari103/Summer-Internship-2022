import Nav from "./Nav";
import Sidebar from "./Sidebar";
// import Lists from './Lists';
import "./Home.css";

function Home() {
  return (
    <>
      <Nav />
      <div id="notes" >
        <Sidebar />
        <div className="styling">HOME</div>
      </div>
    </>
  );
}
export default Home;
