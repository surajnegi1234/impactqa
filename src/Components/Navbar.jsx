import React from 'react'
import "../Styles/navbar.css"
const Navbar = () => {
  return (
    <div id='nav-container'>
     <div className="nav-bar">
    <div id='left'>
    <div className="img-container">
        <a href='https://www.codingninjas.com/'><img src="https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png"/></a>
    </div>
    <div id ="left-right-container">
    <div className="job-container">
        Job Bootcamp
    </div>
    <div className="Upskilling-container">
        <a>
            <span>Upskilling Courses</span>
            <div>Upto 100% scholarship</div>
        </a>
    </div>
    </div>
    </div>
    <div id='right'>

     <button><span>Login</span></button>
    </div>
     </div>

    </div>
  )
}

export default Navbar
