import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import PlayStation from '../pages/navbar/PlayStation.jsx';

export const Router = () => {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/PlayStation'
                    element={<PlayStation />}
                />
            </Routes>
        </>
    )
}