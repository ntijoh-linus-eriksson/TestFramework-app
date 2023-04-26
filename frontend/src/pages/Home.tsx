import { Link } from "react-router-dom"
import "./Home.css"

export const Home = () => {
    return (
        <> 
        <div className="navbar">
            <Link to="/" >Home</Link>
            <Link to="/registerUser" >Register Users</Link>
            <Link to="/showUser">Show Users</Link>
        </div>
        </>
    )
}