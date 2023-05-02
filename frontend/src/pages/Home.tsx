import { Link } from "react-router-dom"
import "./Home.css"
import React from "react"


export const Home = () => {
    return (
        <> 
        <div className="navbar">
            <Link id={'home'}to="/" >Home</Link>
            <Link to="/registerUser" >Register Users</Link>
            <Link to="/showUser">Show Users</Link>
        </div>
        </>
    )
}