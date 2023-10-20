import { BrowserRouter , Routes , Route , NavLink , Navigate} from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import './App.css';

function App() {
  const [loggedIn] = useState(false)
  return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <h1>My Articles</h1>
            <NavLink to='/'>Home</NavLink><br/>
            <NavLink to='/about'>About</NavLink><br/>
            <NavLink to='/contact'>Contact</NavLink>
          </nav>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/About/*' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
              <Route path='/Articles/:id' element={<Articles />}/>
              <Route path='/mahdi' element={loggedIn ? <p>Hello World</p> : <Navigate to='/' />}/>
              <Route path='*' element={<Navigate to='/' />}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App;