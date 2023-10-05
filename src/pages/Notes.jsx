
import { useState } from "react"
import {useUserContext} from"../hooks/useUserContext"
import FormNote from "../component/FormNote"
import Card from "../component/Card"

const Notes = () => {

     const [showAdd,setShowAdd] =useState(false);
     const {notes,dispatch}  = useUserContext();

     
     const[fillValue, setFillValue] = useState(null)
     var [fillActive, setFillActive] =useState(0)

     const notesFilterHandler = (e,stats,num) =>{
          e.preventDefault();
          dispatch({type:"SET_NOTES"});
          setFillValue(stats);
          setFillActive(num)
     }

     return (
          <>
               <div className="notes-container">
                    <div className="notes-header">
                         <div className="notes-filter">
                              <button className={fillActive==0? "active-btn" : ""} onClick={e=>notesFilterHandler(e,null,0)}>All</button>
                              <button className={fillActive==1? "active-btn" : ""} onClick={e=>notesFilterHandler(e,false,1)}>Active</button>
                              <button className={fillActive==2? "active-btn" : ""} onClick={e=>notesFilterHandler(e,true,2)}>Archives</button>
                         </div>
                         <button onClick={e => setShowAdd(!showAdd)} >{showAdd? "Close": "Add new note"}</button>
                    </div>
                    {
                         showAdd?  (<FormNote/>) : null
                    }
                    <div className="note-list">
                         {
                              notes.length !=0? null: <h3>Tidak ada Note</h3>
                         }
                         {
                              fillValue == null? (
                                   notes && notes.map(n => <Card archived={n.archived} key={n.id} id={n.id} title={n.title} createdAt={n.createdAt} body={n.body} />)
                              ):(
                                   notes && notes.filter(n => n.archived == fillValue).map(n => <Card archived={n.archived} key={n.id} id={n.id} title={n.title} createdAt={n.createdAt} body={n.body} />)
                              )                
                         }
                    </div>
               </div>
          </>
     )
}

export default Notes