import { useState } from 'react'

import './App.css'
import FrontPage from './components/FrontPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SummaryPage from './components/SummaryPage';
import {formContext} from "./context/context.jsx"

function App() {

  const approute = createBrowserRouter([
    {
      path:"/",
      element:<FrontPage/>
    },
    {
      path:'/summary',
      element:<SummaryPage/>
    }
  ])

  const [form,setForm] = useState(false)
  return (
    <>
    <formContext.Provider value={[form,setForm]}>
      <RouterProvider router={approute} />
      </formContext.Provider>
    </>
  )
}

export default App
