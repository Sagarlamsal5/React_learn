import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Chai and Share is Important</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
