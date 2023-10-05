
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from "@fortawesome/free-solid-svg-icons"
import './App.css'

import { useEffect } from "react"
import { getInitialData } from "./utils/intialData"
import {useUserContext} from"./hooks/useUserContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Navbar from "./component/Navbar"
import Header from './component/Header'
import Home from './pages/Home'
import Documents from './pages/Documents'
import Notes from './pages/Notes'
import Output from './pages/Output'
import Overview from './pages/Overview'
import Support from './pages/Support'
import Task from './pages/Task'

function App() {

  const {dispatch}  = useUserContext();

  useEffect(()=>{
    var data = getInitialData();
    sessionStorage.setItem("notes", JSON.stringify(data))
    dispatch({type:"SET_NOTES"})
},[])

  return (
    <>
      <div className="App">
        <Router>
          <div id="layout">
            <Navbar />
            <div className="pages">
              <Header/>
              <div id="content">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/overview' element={<Overview />} />
                  <Route path='/documents' element={<Documents />} />
                  <Route path='/notes' element={<Notes />} />
                  <Route path='/output' element={<Output />} />
                  <Route path='/support' element={<Support />} />
                  <Route path='/task' element={<Task />} />
                </Routes>
              </div>
            </div>
          </div>

        </Router>
      </div>

    </>
  )
}

export default App
