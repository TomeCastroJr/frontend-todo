import CustomButton from "./CustomButton"

import "./SideBar.scss"

import logo from"../assets/images/logo.png"

const SideBar = () => {
  return (
    <div className="sidebar-container">
        <div className="logo">
            <img src={logo} alt="Full Stack Club" />
        </div>


    </div>
  )
}

export default SideBar