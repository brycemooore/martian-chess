import { Piece, PieceType, PlayerZone, Tile } from "..";

export enum FenPiece {
    Q = 'Q', D = 'D', P = 'P'
}

export enum FenSeparator {
    OPEN_BRACKET = "[",
    CLOSE_BRACKET = "]",
    ROW_CLOSE = "/"
}

export type FenCharacter = FenPiece | FenSeparator | number

export const validNumber = (charNumber: string) => {
    let num: number = +charNumber
    if (!num || num < 0 || num > 4) {
        throw new Error(`Invalid number "${charNumber} found in processing"`);
    }
    return num;
}

export const processBoard = (board: string[]): Tile[][] => {
    let currentPlayerZone: PlayerZone = PlayerZone.A;
    const newBoard: Tile[][] = [];
    board.forEach((r, i) => {
        const row: Tile[] = [];
        if (i > 3) {
            currentPlayerZone = PlayerZone.B;
        }
        const chars = r.split('');
        chars.forEach((ch: string) => {
            if (ch in FenPiece) {
                const p: FenPiece = ch as unknown as FenPiece;
                const piece: Piece = convertFenPiece(p, currentPlayerZone);
                const tile: Tile = new Tile();
                tile.setCurrentPiece(piece);
                row.push(tile);
            } else {
                const num = validNumber(ch);
                for (let i = 0; i < num; i++) {
                    row.push(new Tile());
                }
            }
        })
        newBoard.push(row);
    })
    console.log(newBoard);
    return newBoard;
}

export const processPiecesString = (pieces: string) => {
    
}

export const processFenString = (fen: string) => {
    const rows: string[] = fen.split(FenSeparator.ROW_CLOSE);
    if (rows.length !== 9) {
        throw new Error("Invalid FEN String passed in");
    }
    const playerPieces = rows.pop();
    const board: Tile[][] = processBoard(rows);
}

export const convertFenPiece = (piece: FenPiece, playerZone: PlayerZone): Piece => {
    switch(piece) {
        case FenPiece.Q:
        {
            return new Piece(PieceType.QUEEN, playerZone)
        }
        case FenPiece.D:
        {
            return new Piece(PieceType.DRONE, playerZone)
        }
        case FenPiece.P:
        {
            return new Piece(PieceType.PAWN, playerZone)
        }
        default:
        {
            throw new Error('Invalid piece type: ' + piece);
        }
    }
}