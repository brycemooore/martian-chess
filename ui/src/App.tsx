import { useState } from "react";
import Board from "./components/board";

function App() {
	const [rotationIdx, setRotationIdx] = useState<number>(0);
	const rotationPositions = [
		"rotate-0",
		"rotate-90",
		"rotate-180",
		"-rotate-90",
	];

	const rotateHandler = () => {
		if (rotationIdx < 3) {
			setRotationIdx((current) => current + 1);
		} else {
			setRotationIdx(0);
		}
	};

	return (
		<div className="w-auto h-screen flex items-center justify-center">
			<Board rotation={rotationPositions[rotationIdx]} />
			<button className="absolute" onClick={rotateHandler}>
				Rotate
			</button>
		</div>
	);
}

export default App;
