import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query" 
import { RegisterUser } from "./pages/user/RegisterUser"
import { ShowUsers } from "./pages/user/ShowUsers"
import { Home } from "./pages/Home"
import { EditUser } from "./pages/user/EditUser"
export const App = () => {
  const queryClient = new QueryClient()
 return (
    <>
    <QueryClientProvider client={queryClient}>
      <Home />
      <Padding />
      <Routes>
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/showUser" element={<ShowUsers />} />
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
    </QueryClientProvider>
    </>
  )
}

export const Padding = () => {
  return (
    <div className="padding" />
  )
}