import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TutorRegistration from './TutorRegistration'
import StudentRegistration from './StudentRegistration'
import TutorDashboard from './TutorDashboard'
import StudentDashboard from './StudentDashboard'

import StudentLogin from './StudentLogin'
import TutorLogin from './TutorLogin'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tutor/register" element={<TutorRegistration/>} />
      <Route path="/student/register" element={<StudentRegistration/>} />
      <Route path="/student/login" element={<StudentLogin/>} />
      <Route path="/tutor/login" element={<TutorLogin/>} />
      <Route path="/tutor/dashboard" element={<TutorDashboard/>} />
      <Route path="/student/dashboard" element={<StudentDashboard/>} />
    </Routes>
  )
}

export default Allroutes
