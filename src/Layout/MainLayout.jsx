import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>This is Navbar  </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;