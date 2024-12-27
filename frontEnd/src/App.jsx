import {Routes, Route} from 'react-router-dom'
import SignupPage from './components/Home/SignupPage'
import LoginPage from './components/Home/LoginPage'
import HomePage from './components//Home/HomePage'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
