import { useEffect, useState } from "react";
import Board from "./components/board";
import { processFenString, TWO_PLAYER_STARTER_FEN } from "./utils";

function App() {
  const [rotationIdx, setRotationIdx] = useState<number>(0);
  const rotationPositions = ['rotate-0', 'rotate-90', 'rotate-180', '-rotate-90']

  const rotateHandler = () => {
    if (rotationIdx < 4) {
      setRotationIdx(current => current + 1);
    } else {
      setRotationIdx(0)
    }
  }

  useEffect(() => {
    processFenString(TWO_PLAYER_STARTER_FEN)
  }, [])

  return (
    <div className="w-auto h-max flex items-center justify-center">
      <Board rotation={rotationPositions[rotationIdx]} />
      <button className="absolute" onClick={rotateHandler}>Rotate</button>
    </div>
  );
}

export default App;