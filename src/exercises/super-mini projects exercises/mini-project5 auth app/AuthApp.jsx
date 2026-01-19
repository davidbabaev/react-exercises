import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import DashboardPage from './DashboardPage'
import AuthProvider, { useAuth } from './AuthContext'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes(){
  const {user} = useAuth();

  return(
    <>
      <NavBar/>

        <Routes>
            <Route path='/home' element = {<HomePage/>} />
            <Route path='/dashboard' element = {
                <ProtectedRoute user={user}>
                  <DashboardPage/>
                </ProtectedRoute>
              } />
            <Route path='/login' element = {<LoginPage/>} />
            <Route path='/register' element = {<RegisterPage/>} />
        </Routes>
    </>
  )
}


export default function AuthApp() {
    // Main App
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}
