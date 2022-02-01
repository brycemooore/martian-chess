import { Piece } from "./Piece";

export interface TileState {
    currentPiece?: Piece
    color: string
}

export class Tile implements TileState {
    currentPiece?: Piece;
    color: string;


    constructor(color: string) {
        this.color = color;
        this.currentPiece = undefined;
    }

    getColor(): string {
        return this.color;
    }

    getCurrentPiece(): Piece | undefined {
        return this.currentPiece;
    }

    setCurrentPiece(piece: Piece) {
        this.currentPiece = piece;
    }
}