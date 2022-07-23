import Nav from './Nav';
import Sidebar from './Sidebar';
import "./Notes.css";
import "./Home.css";



const Shared = () => {
    return(
        <div>
        <Nav/>
        <div id='notes'>
            <Sidebar/>
            <div className="styling">Shared</div>
        </div>
    </div>
    )
}

export default Shared