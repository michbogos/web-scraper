import React from 'react'

import {Link}from "react-router-dom"


export default function TopNavBar(props) {
    return (
        <div id = "TopNavBar">
            <button className="TopNavBarButton"><Link className = "link" to="/scrape">Scrape</Link></button>
            <button className="TopNavBarButton"><Link className = "link" to="/convert">Convert</Link></button>
            <button className="TopNavBarButton"><Link className = "link" to="/manage">Manage</Link></button>
            <button className="TopNavBarButton"><Link className = "link" to="/account">Account</Link></button>
            <button className="TopNavBarButton"><Link className = "link" to="/about">About</Link></button>
        </div>
    )
}
