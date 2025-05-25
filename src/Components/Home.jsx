import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main'>
        <div className='content-area'>
            <h1>Welcome to PopX</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit,</p>
            <Link to='/account'><button>Create Account</button></Link>
            <Link to="/login"><button>Already Registered? Login</button></Link>
        </div>
    </div>
  )
}

export default Home