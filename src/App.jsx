import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/authentication/LandingPage'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import Home from './pages/Home'
import Profile from './components/authentication/Profile'
import Searchbar from './components/shared/Searchbar'
import QuizPage from './components/quiz/QuizPage'
import UserDashboard from './components/dashboard/UserDashboard'
import CourseList from './components/courses/CourseList'
import QuizData from './components/quiz/QuizData'
import Footer from './components/shared/Footer'
import CourseDetails from './components/courses/CourseDetails'
import PurchaseCourse from './components/courses/PurchaseCourse'
import FreeCourses from './components/courses/FreeCourses'
import Forum from './components/dashboard/Forum'
import WishlistPage from './components/courses/WishlistPage'
import VideoPlayer from './components/shared/VideoPlayer'
import CourseModeration from './components/adminmodule/CourseModeration';
import Dashboard from './components/adminmodule/Dashboard';
import Reports from './components/adminmodule/Reports';
import UserManagement from './components/adminmodule/UserManagement';
import InstructorDashboard from './components/instructormodule/InstructorDashboard';
import CoursePages from './pages/CoursePages';
import CoursePage from './components/instructormodule/CoursePage';
import Analytics from './components/instructormodule/Analytics';
import CourseCreation from './components/instructormodule/CourseCreation';
import StudentManagement from './components/instructormodule/StudentManagement';
import CourseCard from './components/courses/CourseCard';

import CoursesContext from './components/courses/CoursesContext';
import Setting from './pages/Setting';
import Result from './components/quiz/Result';
import Notification from './components/quiz/Notification';
import Message from './components/quiz/Message';
import ProgressBar from './components/dashboard/ProgressBar';
import NavPage from './components/shared/NavPage';
import Testimonials from './components/shared/Testimonials';
import ThemeContext from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {

  const[courses, setCourses]=useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/courseCard' element={<CourseCard/>}/>
          <Route path='/Search' element={<Searchbar/>}/>
          <Route path='/CoursePage' element={<CoursePages/>}/>
          <Route path='/Quiz' element={<QuizPage/>}/>
          <Route path='/Dashboard' element={<UserDashboard/>}/>
          <Route path='/CourseList' element={<CourseList/>}/>
          <Route path='/coursecontext' element={<CoursesContext/>}/>
          <Route path='/QuizData' element={<QuizData/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/courses/:id' element={<CourseDetails/>}/>
          <Route path='/purchase' element={<PurchaseCourse/>}/>
          <Route path='/freecourses' element={<FreeCourses/>}/>
          <Route path='/forum' element={<Forum/>}/>
          <Route path='/wishlist' element={<WishlistPage/>}/>
          <Route path='/video/:videoId' element={<VideoPlayer/>}/>
          <Route path='/settings' element={<Setting/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/progressbar' element={<ProgressBar/>}/>
          <Route path='/navpage' element={<NavPage/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/themecontext' element={<ThemeContext/>}/>


          <Route path='/CourseModeration' element={<CourseModeration/>}/>
          <Route path='/admindashboard' element={<Dashboard/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/usermanagement' element={<UserManagement/>}/>


          <Route path='/instructorDashboard' element={
            <InstructorDashboard courses={courses} setCourses={setCourses} />
          }/>
          <Route path='/instructorcourses' element={<CoursePage courses={courses}/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/coursecreation' element={<CourseCreation/>}/>
          <Route path='/studentManagement' element={<StudentManagement/>}/>

          <Route path='/authcontext' element={<AuthProvider/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
