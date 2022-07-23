import Nav from './Nav';
import Sidebar from './Sidebar';
import "./SubList.css";

function SubList()
{
    return(
        <div>
        <Nav/>
        <div id='sublist'>
            <Sidebar/>
            <div>Sublist of TODO</div>
        </div>
    </div>
    )

}
export default SubList;