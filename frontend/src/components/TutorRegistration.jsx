import React, { useState } from 'react'
import styles from "../styles/Tutor.module.css"
import { Link, useNavigate } from 'react-router-dom';

const TutorRegistration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  const tutors = JSON.parse(localStorage.getItem("tutors")) || [];  
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {name,age,gender,education,email,password};
        tutors.push(payload)
        let tutorData = localStorage.setItem("tutors",JSON.stringify(tutors))
        alert("Signup Successfull!")
        navigate("/tutor/login")
      };
  return (
       <div className={styles.bodyAll}>
        <div className={styles.home}>
            
      <div className={styles.imageDiv}>
      <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.538978984.1695468028&semt=ais" alt="" />
      </div>
      <div >
      <h1>TUTOR SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
        <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Education" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">SIGNUP</button>
      </form>
      <p>Already registered?Click here to <Link to="/tutor/login">Login</Link></p>
           
      </div>
      
    </div>
    </div>
      
    
  )
}

export default TutorRegistration
