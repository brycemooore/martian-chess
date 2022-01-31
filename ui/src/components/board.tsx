import Tile from "./tile";

export default function Board() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-row mr-10">
          <Tile color="bg-board-red" />
          <Tile color="bg-board-blue" />
          <Tile color="bg-board-red" />
          <Tile color="bg-board-blue" />
        </div>
        <Tile color="bg-board-red" />
        <Tile color="bg-board-blue" />
        <Tile color="bg-board-red" />
        <Tile color="bg-board-blue" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row mr-10">
          <Tile color="bg-board-blue" />
          <Tile color="bg-board-red" />
          <Tile color="bg-board-blue" />
          <Tile color="bg-board-red" />
        </div>
        <Tile color="bg-board-blue" />
        <Tile color="bg-board-red" />
        <Tile color="bg-board-blue" />
        <Tile color="bg-board-red" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row mr-10">
          <Tile color="bg-board-red" />
          <Tile color="bg-board-blue" />
          <Tile color="bg-board-red" />
          <Tile color="bg-board-blue" />
        </div>
        <Tile color="bg-board-red" />
        <Tile color="bg-board-blue" />
        <Tile color="bg-board-red" />
        <Tile color="bg-board-blue" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row mr-10">
          <Tile color="bg-board-blue" />
          <Tile color="bg-board-red" />
          <Tile color="bg-board-blue" />
          <Tile color="bg-board-red" />
        </div>
        <Tile color="bg-board-blue" />
        <Tile color="bg-board-red" />
        <Tile color="bg-board-blue" />
        <Tile color="bg-board-red" />
      </div>
    </div>
  );
}
