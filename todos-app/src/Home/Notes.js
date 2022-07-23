import Nav from './Nav';
import Sidebar from './Sidebar';
import "./Notes.css";
import "./Home.css";

function Notes()
{
    return(
        <div>
        <Nav/>
        <div id='notes'>
            <Sidebar/>
            <div className="styling">Notes</div>
        </div>
    </div>
    )
    
}
export default Notes;