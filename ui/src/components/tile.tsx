interface TileProps {
  color: string
}

export default function Tile({ color }: TileProps) {
  return (
    <div className={`w-44 h-44 ${color}`} />
  );
}
