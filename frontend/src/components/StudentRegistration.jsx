import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from "../styles/Tutor.module.css"

const StudentRegistration = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [classValue, setClass] = useState('');
    const [grade, setGrade] = useState('');
    const students = JSON.parse(localStorage.getItem("students")) || [];  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {name,age,grade,classValue,email,password};
        students.push(payload)
        let tutorData = localStorage.setItem("students",JSON.stringify(students))
        alert("Signup Successfull!")
        navigate("/student/login")
      };
  return (
    <div className={styles.bodyAll}>
    <div className={styles.home}>
        
  <div className={styles.imageDiv}>
  <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.538978984.1695468028&semt=ais" alt="" />
  </div>
  
    <div>
       <h1>STUDENT SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <input type="text" value={classValue} onChange={(e) => setClass(e.target.value)} placeholder="Class" />
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" />
        <button type="submit">SIGNUP</button>
      </form>
      <p>Already registered?Click here to <Link to="/student/login">Login</Link></p>
    </div>
    </div>
    </div>
  )
}

export default StudentRegistration
