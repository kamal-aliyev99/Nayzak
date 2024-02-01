import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/homePage/homePage'
import MainLayout from './layouts/mainLayout/mainLayout'
import AuthLayout from './layouts/authLayout/authLayout'
import SignInPage from './pages/signInPage/signInPage'
import SignUpPage from './pages/signUpPage/signUpPage'
import NotFoundPage from './pages/notFoundPage/notFoundPage'
import ContactPage from './pages/contactPage/contactPage'
import AboutPage from './pages/aboutPage/aboutPage'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<MainLayout/>}>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route index element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Route>

        <Route path='/auth' element={<AuthLayout/>}>
          <Route path='/auth/sign-in' element={<SignInPage/>}/>
          <Route path='/auth/sign-up' element={<SignUpPage/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
