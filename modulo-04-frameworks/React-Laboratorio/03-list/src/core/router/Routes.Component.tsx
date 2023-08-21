import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsScene from '../../scene/Github/Details.scene';
import { switchRoutes } from './Routes';
import DashBoardScene from '../../scene/DashBoard.scene';
import DetailRickAndMortyScene from '../../scene/RickAndMorty/DetailRickAndMorty.scene';
import LoginScene from '../../scene/Github/Login.scene';
import ListScene from '../../scene/Github/List.scene';
import ListRickMortyScene from '../../scene/RickAndMorty/ListRickMorty.scene';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root}                 element={<DashBoardScene/>} />
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