import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import CreateCreature from './components/CreateCreature';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/calculator" element={ <CreateCreature />} />
      </Routes>
    </div>
  )
}

export default App
