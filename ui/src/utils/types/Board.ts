import { Piece, Tile } from ".";

export interface BoardState {
    board: Array<Array<Tile>>
    playerAPieces: Array<Piece>
    playerBPieces: Array<Piece>
}

export class Board implements BoardState {
    board: Tile[][];
    playerAPieces: Piece[];
    playerBPieces: Piece[];

    constructor(fen: string) {
        this.board = []
        this.playerAPieces = []
        this.playerBPieces = []
    }

    static generateBoard(fen: string) {
        
    }
}