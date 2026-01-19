import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { AuthProviderEx6 } from './providers/AuthProviderEx6'
import { ThemeProviderEx6 } from './providers/ThemeProviderEx6'
import LoginPageEx6 from './pages/LoginPageEx6'
import UserDashboardEx6 from './pages/UserDashboardEx6'
import ProtectedRouteEx6 from './components/ProtectedRouteEx6'
import HomePageEx6 from './pages/HomePageEx6'
import NavBarEx6 from './components/NavBarEx6'
import UserProfileEx6 from './pages/UserProfileEx6'
import SelectedPageEx from './pages/SelectedPageEx'
import DisplayUsersEx6 from './components/DisplayUsersEx6'
import RegisteredPageEx6 from './pages/RegisteredPageEx6'
import CardsRegisterPageEx6 from './pages/CardsRegisterPageEx6'
import { CardsProviderEx6 } from './providers/CardsProviderEx6'
import AllCardsPageEx6 from './pages/AllCardsPageEx6'

export default function AppUsersEx6() {
  return (
    <AuthProviderEx6>
        <ThemeProviderEx6>
          <CardsProviderEx6>
            <NavBarEx6/>

            <Routes>
                <Route path='/home' element={<HomePageEx6/>}/>
                <Route path='/login' element={<LoginPageEx6/>}/>
                {/* how fo protected route: */}
                <Route path='/dashboard' element={
                  <ProtectedRouteEx6>
                    <UserDashboardEx6/>
                  </ProtectedRouteEx6>
                }/>
                <Route path='/createnewcard' element={
                  <ProtectedRouteEx6>
                    <CardsRegisterPageEx6/>
                  </ProtectedRouteEx6>
                }/>
                <Route path='/selectedusers' element={<SelectedPageEx/>}/>
                <Route path='/allusers' element={<DisplayUsersEx6/>}/>
                <Route path='/register' element={<RegisteredPageEx6/>}/>
                <Route path='/allcards' element={<AllCardsPageEx6/>}/>

                <Route path='/userprofile/:id' element={<UserProfileEx6/>}/>

            </Routes>
          </CardsProviderEx6>
        </ThemeProviderEx6>
    </AuthProviderEx6>
  )
}
