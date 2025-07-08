import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import CreateAccount from './Components/CreateAccount'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<CreateAccount/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  )
}

export default App
