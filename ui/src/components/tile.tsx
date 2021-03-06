interface TileProps {
  color: string;
  piece?: string;
}

export default function Tile({ color, piece }: TileProps) {
  return (
    <div className={`w-16 h-16 md:w-24 md:h-24 sm:w-16 sm:h-16 ${color}`}>
      {piece}
    </div>
  );
}
