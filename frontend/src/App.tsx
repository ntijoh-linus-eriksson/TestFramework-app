import { Button, TextField } from "@mui/material"
import "./App.css"
import { useState } from "react"
export const App = () => {
  const initialUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}
  const [users, setUsers] = useState([initialUser])
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const submithandler = (e: any) => {
    e.preventDefault()
    const user = {firstName, lastName, email, password}
    setUsers([...users, user])
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }
 return (
    <>
      <div className="Login">
        <div className="Container">
            <h1>Login</h1>
            <form onSubmit={(e) => submithandler(e)}>
                <TextField className="firstName" label="First Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <TextField className="lastName" label="Last Name" variant="outlined" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <TextField className="email" label="Email" variant="outlined"  onChange={(e) => setEmail(e.target.value)} value={email}/>
                <TextField className="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <p/>
                <Button variant="contained" size="large" onClick={(e) => submithandler(e)}>
                  Submit
                </Button>
            </form>
          </div>
      </div>
    </>
  )
}