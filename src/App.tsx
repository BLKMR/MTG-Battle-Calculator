import Board from './components/Board/Board';
import CreateCreature from './components/Board/Creatures/CreateCreature';
import Home from './components/Home';

function App() {


  return (
    <div className="App">
      <Home />
      <CreateCreature />
      <Board />
    </div>
  )
}

export default App
