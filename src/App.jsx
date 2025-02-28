import Tasks from "./components/Tasks";
import { ToastContainer } from 'react-toastify';
import SideBar from"./components/SideBar"

import "./App.scss"

function App() {

  return (
    <div className="app-container">
      <SideBar/>
      <Tasks/>
      <ToastContainer/>
    </div>
  )
}

export default App
