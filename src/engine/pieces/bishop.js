import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let i=1;
        let bishopArray = [];
        while(i<7){
        if(location.row+i<8 && location.row+i < 8){
        bishopArray.push(Square.at(location.row+i, location.col+i));
        }
        if(location.row-i>=0 && location.col-i>=0){
            bishopArray.push(Square.at(location.row-i, location.col-i));
        } 
        if(location.row+i<8 && location.col-i>=0){
            bishopArray.push(Square.at(location.row+i, location.col-i));
        }
        if(location.row-i>=0 && location.col+i<8){
            bishopArray.push(Square.at(location.row-i, location.col+i));
           
        }
        i++;
        }
        return bishopArray
    }
}
