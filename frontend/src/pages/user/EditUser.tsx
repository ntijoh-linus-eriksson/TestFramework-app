import { Button, TextField } from "@mui/material"
import "./User.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { PUTUser } from "../../api/EditUser"
export const EditUser = () => {
  const location = useLocation();
  const saved = location.state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState(saved.id)
  const [firstName, setFirstName] = useState(saved.firstName ?? "");
  const [lastName, setLastName] = useState(saved.lastName ?? "");
  const [email, setEmail] = useState(saved.email ?? "");
  const [password, setPassword] = useState(saved.password ?? "")
  const submithandler = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const user = {id, firstName, lastName, email, password,}
    console.log(user)
    PUTUser(user, saved.id) 
  }
  
 return (
    <>
      <div className="Login">
        <div className="Container">
            <h1>Edit User</h1>
            <form onSubmit={(e) => submithandler(e)}>
                <TextField className="firstName" label="First Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <TextField className="lastName" label="Last Name" variant="outlined" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <TextField className="email" label="Email" variant="outlined"  onChange={(e) => setEmail(e.target.value)} value={email}/>
                <TextField className="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <p/>
                <Button variant="contained" size="large" onClick={(e) => submithandler(e)}>
                  Confirm
                </Button>
            </form>
          </div>
      </div>
    </>
  )
}
