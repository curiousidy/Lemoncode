import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsScene from '../../scene/Details.scene';
import ListScene from '../../scene/List.scene';
import LoginScene from '../../scene/Login.scene';
import { switchRoutes } from './Routes';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root}     element={<LoginScene/>}/>
        <Route path={switchRoutes.list}     element={<ListScene/>}/>
        <Route path={switchRoutes.details}  element={<DetailsScene/>}/>
      </Routes>
    </Router>
  )
}

export default RoutesComponent