export enum FenPiece {
    Q, D, P
}

export enum FenSeparator {
    OPEN_BRACKET = "[",
    CLOSE_BRACKET = "]",
    ROW_CLOSE = "/"
}

export type FenCharacter = FenPiece | FenSeparator | number

export const validNumber = (charNumber: string) => {
    let num: number = +charNumber
    if (!num || num < 0 || num > 8) {
        throw new Error(`Invalid number "${charNumber} found in processing"`);
    }
    return num;
}

export const processCharacter = (char: string) => {
    
}
