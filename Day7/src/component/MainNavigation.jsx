import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from "../pages/login";
import Register from '../pages/register';
import { RoutePaths } from '../utils/enum';
export const MainNavigation=()=>{
    return(<>
        <Routes>
            <Route exact path={RoutePaths.Login} element={<Login/>}/>
            <Route exact path={RoutePaths.Register} element={<Register/>}/>
        </Routes>
    </>)
}