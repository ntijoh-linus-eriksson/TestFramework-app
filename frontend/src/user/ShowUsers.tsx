import { Button, Card } from "@mui/material"
import {User} from "../api/CreateUser.ts"
import { FetchUsers } from "../api/FetchUser"
import "./User.css"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { SettingsSuggest } from "@mui/icons-material"
export const ShowUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const data: User[] = FetchUsers()
  useEffect(() => {
    if(data) {
      return setUsers(data)
    } else {
      return setUsers([])
    }
    
    
    },[data])
    
 return (
    <div className="cardContainer">
      {users.map((user, index) => (
        <Card
         key={index} variant="outlined"
         sx={{ width: 345 }}
         >
          <div className="buttonContainer">
            <Button variant="contained" startIcon={<SettingsSuggest/>}>Edit</Button>
          </div>
          <h1>First Name: {user.firstName}</h1>
          <h2>Last Name: {user.lastName}</h2>
          <h2>Email: {user.email}</h2>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
        </Card>
      ))}
    </div>
  )
}
