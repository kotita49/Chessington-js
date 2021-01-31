import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
       
        let knightArray = [Square.at(location.row+2, location.col+1), Square.at(location.row+1, location.col+2), Square.at(location.row+2, location.col-1), Square.at(location.row+1, location.col-2),Square.at(location.row-2, location.col-1), Square.at(location.row-1, location.col-2), Square.at(location.row-2, location.col+1), Square.at(location.row-1, location.col+2)];
    return knightArray
    }
    }

