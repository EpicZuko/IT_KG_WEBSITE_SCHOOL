import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import MainPage from '../pages/MainPage'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/admin5335" element={<AdminPage />} />
      </Routes>
   )
}

export default AppRoutes
