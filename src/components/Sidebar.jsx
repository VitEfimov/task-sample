import React, { useState } from 'react';


const Sidebar = ({ setCurrentPage, setTitle }) => {

    const handleNavigation = (page) => {
        setCurrentPage(page);
        setTitle(page);
    };



    return (

        <nav className="sidebar">

            <button className="nav-button dashboard" onClick={() => handleNavigation('Dashboard')}>
                Dashboard
            </button>
            <button className="nav-button board" onClick={() => handleNavigation('Board')}>
                Board
            </button>
            <button className="nav-button about" onClick={() => handleNavigation('About')}>
                About
            </button>
            <button className="nav-button settings" onClick={() => handleNavigation('Settings')}>
                Settings
            </button>

        </nav>

    )
}

export default Sidebar;
