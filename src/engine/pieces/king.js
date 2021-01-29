import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let kingArray = [] ;
       if(location.row<7){
           kingArray = kingArray.concat([Square.at(location.row+1, location.col),Square.at(location.row+1, location.col+1),Square.at(location.row+1, location.col-1) ])
       }
       if(location.col>0){
       kingArray = kingArray.concat([ Square.at(location.row, location.col-1), Square.at(location.row, location.col+1)]);
    }
    if(location.row>0){
         kingArray = kingArray.concat([Square.at(location.row-1, location.col), Square.at(location.row-1, location.col+1)])
        }
        if(location.row>0 && location.col>0){
            kingArray = kingArray.concat([Square.at(location.row-1, location.col-1) ])
        }
        return kingArray
    }
}
