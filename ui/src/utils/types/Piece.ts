import { PieceType, PlayerZone } from "../constant";

export interface PieceState {
    type: PieceType
    playerZone: PlayerZone
}

export class Piece implements PieceState {
    type: PieceType;
    playerZone: PlayerZone;

    constructor(type: PieceType, playerZone: PlayerZone) {
        this.type = type;
        this.playerZone = playerZone;
    }

    getPieceType() : PieceType {
        return this.type;
    }

    getPlayerZone() : PlayerZone {
        return this.playerZone;
    }

    setPlayerZone(playerZone: PlayerZone) {
        this.playerZone = playerZone;
    }

    static getPieceValue(piece: Piece): number {
        switch(piece.type) {
            case PieceType.QUEEN: 
            {
                return 3;
            }
            case PieceType.DRONE:
            {
                return 2;    
            }
            case PieceType.PAWN:
            {
                return 1;
            }
            default:
            {
                throw new Error("Invalid piece type set on piece: " + piece.type);
            }
        }
        
    }
}