import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import PlayStation from '../pages/navbar/PlayStation.jsx';
import Xbox from '../pages/navbar/Xbox.jsx';
import About from '../pages/navbar/About.jsx';
import Login from '../pages/Login.jsx'

export const Router = () => {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/SobreMi'
                    element={<About />}
                />
                <Route
                    path='/PlayStation'
                    element={<PlayStation />}
                />
                <Route
                    path='/Xbox'
                    element={<Xbox />}
                />
                <Route
                    path='/Login'
                    element={<Login />}
                />
            </Routes>
        </>
    )
}