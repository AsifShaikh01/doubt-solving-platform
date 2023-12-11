import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../styles/Home.module.css"

const Home = () => {
    const navigate = useNavigate();

    const handleClicktutor = () =>{
        navigate("/tutor/register")
    }
    const handleClickstudent = () =>{
        navigate("/student/register")
    }
  return (
    <div className={styles.home}>
      <div>
        <p>I'am here to solve Doubts</p>
        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
        <button onClick={handleClicktutor}>Click here to Signup</button>
        <p>Already have an acoount?Click here to <Link to="/tutor/login">Login</Link></p>
      </div>
      <div>
        <p>Doubts</p>
      </div>
      <div>
        <p>I'am here to ask Doubts</p>
        <img src="https://cdn-icons-png.flaticon.com/128/11498/11498793.png" alt="" />
        <button onClick={handleClickstudent}>Click here to Signup</button>
        <p>Already have an acoount?Click here to <Link to="/student/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Home
