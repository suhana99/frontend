import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import PasswordReset from '../pages/PasswordReset'
import SellerDashboard from '../pages/SellerDashboard'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/package/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/about' element={<FeaturedTourList/>}/>
         <Route path="/reset-password/:token" element={<PasswordReset/>} />
         <Route path="/seller-dashboard" element={<SellerDashboard/>}/>
      </Routes>
   )
}

export default Routers