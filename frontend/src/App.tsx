import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query" 
import { RegisterUser } from "./user/RegisterUser"
import { ShowUsers } from "./user/ShowUsers"
import { Home } from "./pages/Home"
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