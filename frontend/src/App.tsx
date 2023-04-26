import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query" 
import { RegisterUser } from "./user/RegisterUser"
import { ShowUsers } from "./user/ShowUsers"
import { Home } from "./home/Home"
export const App = () => {
  const queryClient = new QueryClient()
 return (
    <>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/showUser" element={<ShowUsers />} />
        </Route>
      </Routes>
    </QueryClientProvider>
    </>
  )
}