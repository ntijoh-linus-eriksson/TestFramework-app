import { Button, Card } from "@mui/material"
import {User} from "../../api/CreateUser.ts"
import { FetchUsers } from "../../api/FetchUser.ts"
import "./User.css"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { SettingsSuggest } from "@mui/icons-material"
import { DeleteUser } from "../../api/DeleteUser.ts"

export interface ShowUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

export const ShowUsers = () => {
  const [users, setUsers] = useState<ShowUser[]>([])
  const data: ShowUser[] = FetchUsers()
  const removeUserFromList = (id: number) => {
   setUsers(users.filter((user) => {return user.id !== id}))
    DeleteUser(id)
  }
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
          <Button
              variant="contained" color="error" startIcon={<DeleteIcon />}
              onClick={() => removeUserFromList(user.id)}
              >
              Delete</Button>
        </Card>
      ))}
    </div>
  )
}
