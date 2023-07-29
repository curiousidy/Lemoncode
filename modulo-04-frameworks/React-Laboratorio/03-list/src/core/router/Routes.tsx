import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailPage } from '../../pods/details/detail'
import { ListPage } from '../../pods/list/list'
import { LoginPage } from '../../pods/login/login'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes