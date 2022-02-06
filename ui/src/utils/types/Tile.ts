import { Piece } from "./Piece";

export interface TileState {
    currentPiece?: Piece
}

export class Tile implements TileState {
    currentPiece?: Piece;

    constructor() {
        this.currentPiece = undefined;
    }

    getCurrentPiece(): Piece | undefined {
        return this.currentPiece;
    }

    setCurrentPiece(piece: Piece) {
        this.currentPiece = piece;
    }
}