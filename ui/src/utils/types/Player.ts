import { PlayerZone } from "../constant";
import { Piece } from "./Piece";

export interface PlayerState {
    pieces: Array<Piece>
    playerZone: PlayerZone
}

export class Player implements PlayerState {
    pieces: Piece[];
    playerZone: PlayerZone;

    constructor(playerZone: PlayerZone) {
        this.playerZone = playerZone;
        this.pieces = [];
    }
    
    getPlayerZone(): PlayerZone {
        return this.playerZone;
    }

    getPieces(): Piece[] {
        return this.pieces;
    }

    getScore(): number {
        return this.pieces
        .map(p => Piece.getPieceValue(p))
        .reduce((p1, p2) => p1 + p2, 0);
    }

    addPiece(piece: Piece): void {
        this.pieces.push(piece);
    }
}