import { PlayerZone, Player, Piece, PieceType } from "../../../utils"


test('Get player score accurately calculates', () => {
    const player = new Player(PlayerZone.B);
    const piece1 = new Piece(PieceType.QUEEN, PlayerZone.B);
    const piece2 = new Piece(PieceType.DRONE, PlayerZone.B);
    player.addPiece(piece1);
    player.addPiece(piece2);
    expect(player.getScore()).toEqual(5)
})