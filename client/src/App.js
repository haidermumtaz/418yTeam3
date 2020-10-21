import React from 'react';
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <div>
      <Navbar />
      <ul>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;