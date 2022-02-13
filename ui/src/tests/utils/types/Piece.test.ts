import { Piece, PieceType, PlayerZone } from "../../../utils"

test('Peice.getPieceValue calculates correct value for queen', () => {
    const piece = new Piece(PieceType.QUEEN, PlayerZone.A)
    expect(Piece.getPieceValue(piece)).toEqual(3)
})

test('Peice.getPieceValue calculates correct value for drone', () => {
    const piece = new Piece(PieceType.DRONE, PlayerZone.A)
    expect(Piece.getPieceValue(piece)).toEqual(2)
})

test('Peice.getPieceValue calculates correct value for pawn', () => {
    const piece = new Piece(PieceType.PAWN, PlayerZone.A)
    expect(Piece.getPieceValue(piece)).toEqual(1)
})

