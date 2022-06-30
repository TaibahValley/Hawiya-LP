import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import "../../assets/css/sidebar.css"

function Sidebar() {
    return (
    <Menu>
    <a className="menu-item" href="#header">
        Explore
    </a>

    <a className="menu-item" href="#Collections">
        Collections
    </a>

    <a className="menu-item" href="#Roadmap">
        Roadmap
    </a>

    <a className="menu-item" href="#Team">
        Team
    </a>

    <a className="menu-item" href="#Contact">
        Contact
    </a>

    <a className="menu-item" href="/node">
        Node
    </a>
    </Menu>
    )
}

export default Sidebar