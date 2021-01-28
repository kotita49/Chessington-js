import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //all the moves of pawn
        let location = board.findPiece(this)
        if(this.player === Player.WHITE){
return Square.at(location.row+1, location.col)
        }else{
            return Square.at(location.row-1, location.col)
        }
        return []
        //[Square.at(1, 0), Square.at(6, 7)]
    }
}
