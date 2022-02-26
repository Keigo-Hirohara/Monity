import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/login/Login';
import Mypage from './components/mypage/Mypage';
import Room from './components/room/Room';

const App = () => {
    return (
        <BrowserRouter>
            <Route path='/login' component={Login}/>
            <Route path='/mypage' component={Route}/>
            <Route path='/room' component={Room}/>
        </BrowserRouter>
    );
};

export default App;