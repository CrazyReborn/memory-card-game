import Gameboard from "./components/gameboard";
import Score from "./components/score";
import './App.css';
import {useState} from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  return (
    <div className="App">
      <Score score={score} streak={streak} />
      <Gameboard score={score} setScore={setScore} streak={streak} setStreak={setStreak}/>
    </div>
  );
}

export default App;
