import Tile from "./tile";

interface BoardProps {
	rotation?: string;
}

export default function Board({ rotation = "" }: BoardProps) {
	const pieceMap = "QQD1/QDP1/DPP1/4/4/1PPD/1PDQ/1DQQ"
		.split("/")
		.map((p) => p.split(""));
	return (
		<div className={`flex ${rotation}`}>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile piece={pieceMap[0][0]} color="bg-board-blue" />
					<Tile piece={pieceMap[1][0]} color="bg-board-red" />
					<Tile piece={pieceMap[2][0]} color="bg-board-blue" />
					<Tile piece={pieceMap[3][0]} color="bg-board-red" />
				</div>
				<div className="flex-col">
					<Tile piece={pieceMap[4][0]} color="bg-board-blue" />
					<Tile piece={pieceMap[5][0]} color="bg-board-red" />
					<Tile piece={pieceMap[6][0]} color="bg-board-blue" />
					<Tile piece={pieceMap[7][0]} color="bg-board-red" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile piece={pieceMap[0][1]} color="bg-board-red" />
					<Tile piece={pieceMap[1][1]} color="bg-board-blue" />
					<Tile piece={pieceMap[2][1]} color="bg-board-red" />
					<Tile piece={pieceMap[3][1]} color="bg-board-blue" />
				</div>
				<div className="flex-col">
					<Tile piece={pieceMap[4][1]} color="bg-board-red" />
					<Tile piece={pieceMap[5][1]} color="bg-board-blue" />
					<Tile piece={pieceMap[6][1]} color="bg-board-red" />
					<Tile piece={pieceMap[7][1]} color="bg-board-blue" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile piece={pieceMap[0][2]} color="bg-board-blue" />
					<Tile piece={pieceMap[1][2]} color="bg-board-red" />
					<Tile piece={pieceMap[2][2]} color="bg-board-blue" />
					<Tile piece={pieceMap[3][2]} color="bg-board-red" />
				</div>
				<div className="flex-col">
					<Tile piece={pieceMap[4][2]} color="bg-board-blue" />
					<Tile piece={pieceMap[5][2]} color="bg-board-red" />
					<Tile piece={pieceMap[6][2]} color="bg-board-blue" />
					<Tile piece={pieceMap[7][2]} color="bg-board-red" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile piece={pieceMap[0][3]} color="bg-board-red" />
					<Tile piece={pieceMap[1][3]} color="bg-board-blue" />
					<Tile piece={pieceMap[2][3]} color="bg-board-red" />
					<Tile piece={pieceMap[3][3]} color="bg-board-blue" />
				</div>
				<div className="flex-col">
					<Tile piece={pieceMap[4][3]} color="bg-board-red" />
					<Tile piece={pieceMap[5][3]} color="bg-board-blue" />
					<Tile piece={pieceMap[6][3]} color="bg-board-red" />
					<Tile piece={pieceMap[7][3]} color="bg-board-blue" />
				</div>
			</div>
		</div>
	);
}
