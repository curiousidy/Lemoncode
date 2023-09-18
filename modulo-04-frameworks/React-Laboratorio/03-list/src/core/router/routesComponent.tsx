import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { switchRoutes } from './routes';
import DetailsScene from '../../scene/Github/detailsScene';
import ListScene from '../../scene/Github/listScene';
import LoginScene from '../../scene/Github/loginScene';
import DetailRickAndMortyScene from '../../scene/RickAndMorty/detailRickAndMortyScene';
import ListRickMortyScene from '../../scene/RickAndMorty/listRickMortyScene';
import DashBoardScene from '../../scene/dashBoardScene';


const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root}                 element={<DashBoardScene/>}/>
        <Route path={switchRoutes.githubexample}        element={<LoginScene/>}/>
        <Route path={switchRoutes.list}                 element={<ListScene/>}/>
        <Route path={switchRoutes.details}              element={<DetailsScene/>}/>
        <Route path={switchRoutes.rickandmorty}         element={<ListRickMortyScene/>}/>
        <Route path={switchRoutes.rickandmortydetails}  element={<DetailRickAndMortyScene/>}/>
      </Routes>
    </Router>
  )
}

export default RoutesComponent