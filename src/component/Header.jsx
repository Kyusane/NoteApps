import { useUserContext } from "../hooks/useUserContext"
import { useState } from "react";


const Header = () => {

     const { dispatch } = useUserContext();
     const [searchInput, setSearchInput] = useState("")

     const searchHandler = (e) => {
          e.preventDefault();
          dispatch({ type: "SET_NOTES" })
          dispatch({ type: "SEARCH_NOTE", payload: { search: searchInput.toLowerCase() } })
          setSearchInput("")
     }
     return (
          <>
               <header>
                    <div className="search-box">
                         <input onChange={e => setSearchInput(e.target.value)} value={searchInput} type="text" id="search-input" placeholder='Search'></input>
                         {
                              searchInput.length != 0 ? <button onClick={searchHandler}>Search</button> : null
                         }
                    </div>
                    <div className="user-information">
                         <h3>Hallo Anyone</h3>
                    </div>
               </header>
          </>
     )
}

export default Header