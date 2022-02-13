import Tile from "./tile";

interface BoardProps {
	rotation?: string;
}

export default function Board({ rotation = "" }: BoardProps) {
	const pieceMap = "QQD1/QDP1/DPP1/4444/4444/1PPD/1PDQ/1DQQ"
		.split("/")
		.map((p) => p.split(""));

	const boardRenderer = pieceMap.map((a, i) => {
		const firstColor = i % 2 === 0 ? "bg-board-blue" : "bg-board-red";
		const secondColor = i % 2 !== 0 ? "bg-board-blue" : "bg-board-red";
		const marginBottom = i === 3 ? "mb-10" : "";

		return (
			<div className={`flex ${marginBottom}`}>
				{a.map((p, i) => (
					<Tile color={i % 2 === 0 ? firstColor : secondColor} piece={p} />
				))}
			</div>
		);
	});

	return <div className={`flex ${rotation} flex-col`}>{boardRenderer}</div>;
}
