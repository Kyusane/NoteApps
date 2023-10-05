
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const Navbar = () => {
     const navigate = useNavigate();
     const {activePage, dispatch} = useUserContext();

     return (
          <>
               <nav>
                    <div className="route">
                         <h3 className={activePage==0? "active" : ""} onClick ={() =>{navigate('/overview'),dispatch({type : "ACTIVE_PAGE", payload :{activePage:0}})}}>Overview</h3>
                         <h3 className={activePage==1? "active" : ""} onClick ={() =>{navigate('/task'),dispatch({type : "ACTIVE_PAGE", payload :{activePage:1}})}}>Task</h3>
                         <h3 className={activePage==2? "active" : ""} onClick ={() =>{navigate('/documents'),dispatch({type : "ACTIVE_PAGE", payload:{activePage:2}})}}>Documents</h3>
                         <h3 className={activePage==3? "active" : ""} onClick ={() =>{navigate('/notes'),dispatch({type : "ACTIVE_PAGE", payload :{activePage:3}})}}>Notes</h3>
                         <h3 className={activePage==4? "active" : ""} onClick ={() =>{navigate('/output'),dispatch({type : "ACTIVE_PAGE", payload :{activePage:4}})}}>Output</h3>
                         <h3 className={activePage==5? "active" : ""} onClick ={() =>{navigate('/support'),dispatch({type : "ACTIVE_PAGE", payload : {activePage:5}})}}>Support</h3>
                    </div>
                    <div className="list">
                    </div>
               </nav>

          </>
     )
}

export default Navbar