import { createContext, useReducer } from "react"

export const UserContext = createContext()

export const userReducer = (state, action) => {
     switch (action.type) {
          case 'SET_NOTES':
               return {
                    notes: JSON.parse(sessionStorage.getItem("notes")),
                    tasks: state.tasks,
                    activePage: state.activePage,
               }
          case 'CREATE_NOTE':
               sessionStorage.setItem("notes", JSON.stringify([action.payload, ...state.notes]))
               return {
                    notes: [action.payload, ...state.notes],
                    tasks: [],
                    activePage: state.activePage,
               }
          case 'DELETE_NOTE':
               sessionStorage.setItem("notes", JSON.stringify(JSON.parse(sessionStorage.getItem("notes")).filter((n) => n.id !== action.payload.id)))
               return {
                    notes: state.notes.filter((n) => n.id !== action.payload.id),
                    tasks: [],
                    activePage: state.activePage,
               }
          case 'ARCHIVES_NOTE':
               var buffer = JSON.parse(sessionStorage.getItem("notes")).filter((n) => n.id !== action.payload.id);
               sessionStorage.setItem("notes", JSON.stringify([...buffer, action.payload]))
               return {
                    notes: [...buffer, action.payload],
                    tasks: [],
                    activePage: state.activePage,
               }
          case 'SEARCH_NOTE':
               var filterNote = state.notes.filter((n) => n.title.toLowerCase().includes(action.payload.search))
               return {
                    notes: filterNote.length != 0 ? filterNote : state.notes,
                    tasks: state.tasks,
                    activePage: state.activePage,
               }
          case 'ACTIVE_PAGE':
               return {
                    notes: state.notes,
                    tasks: state.tasks,
                    activePage: action.payload.activePage,
               }

          default:
               return state
     }
}

export const UserContextProvider = ({ children }) => {
     const [state, dispatch] = useReducer(userReducer, {
          notes: [],
          tasks: [],
          activePage: 0,
     })

     console.log(state)

     return (
          <UserContext.Provider value={{ ...state, dispatch }}>
               {children}
          </UserContext.Provider>
     )
}