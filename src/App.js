import Gameboard from "./components/gameboard";
import Score from "./components/score";
import './App.css';
import {useState} from 'react'

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Score score={score} />
      <Gameboard score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
