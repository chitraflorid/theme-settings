import React, {memo} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home, Settings} from '../pages';
import './style.css';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Settings />} />
            </Routes>
        </div>
    );
}

export const MemoizedRouter = memo(Router);