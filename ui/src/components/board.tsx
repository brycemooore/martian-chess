import Tile from "./tile";

interface BoardProps {
	rotation?: string;
}

export default function Board({ rotation = "" }: BoardProps) {
	return (
		<div data-testid="board" className={`flex ${rotation}`}>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
				</div>
				<div className="flex-col">
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
				</div>
				<div className="flex-col">
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
				</div>
				<div className="flex-col">
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col mb-10">
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
				</div>
				<div className="flex-col">
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
					<Tile color="bg-board-red" />
					<Tile color="bg-board-blue" />
				</div>
			</div>
		</div>
	);
}
