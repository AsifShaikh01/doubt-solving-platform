import React, { useState } from 'react'
import styles from "../styles/Tutor.module.css"
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const students = JSON.parse(localStorage.getItem("students")) || [];  

    const handleSubmit = async (e) => {
        e.preventDefault();
        students.forEach((el) => {
            if (el.email === email && el.password === password) {
              alert("Login successful!!");
              navigate("/student/dashboard");
            } else {
              alert("Wrong credentials!!");
            }
          });
      };
  return (
    <div className={styles.bodyAll}>
    <div className={styles.home}>
        
  <div className={styles.imageDiv}>
  <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.538978984.1695468028&semt=ais" alt="" />
  </div>
  
    <div>
       <h1>STUDENT LOGIN</h1>
      <form onSubmit={handleSubmit}>
        
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
       
        <button type="submit">LOGIN</button>
      </form>
      <p>Don't have an account?Click here to <Link to="/student/register">Signup</Link></p>
    </div>
    </div>
    </div>
  )
}

export default StudentLogin
