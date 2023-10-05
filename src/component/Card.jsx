import { useUserContext } from "../hooks/useUserContext"

const Card = ({ title, createdAt, body, id, archived }) => {

     const { dispatch } = useUserContext()

     return (
          <>
               <div className="Card" key={id} id={id}>
                    <div className="card-data">
                         <h3>{title}</h3>
                         <h6>{createdAt}</h6>
                         <div className="card-body">
                              <p>{body}</p>
                         </div>
                    </div>
                    <div className="card-btn">
                         <button onClick={e => {dispatch({type:"SET_NOTE"}),dispatch({ type: "DELETE_NOTE", payload: { id: id } })}}>Delete</button>
                         <button onClick={e => dispatch({ type: "ARCHIVES_NOTE", payload: { title: title, createdAt: createdAt, body: body, id: id, archived: !archived } })}>{archived ? "Active" : "Archived"}</button>
                    </div>
               </div>

          </>
     )
}
export default Card