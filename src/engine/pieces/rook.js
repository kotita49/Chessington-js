import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let rookArray = [];
        let i=1;
        while(i<8){
            if(location.row+i<9 && location.col+i<9){
           rookArray.push(Square.at(location.row+i,location.col));
         rookArray.push(Square.at(location.row,location.col+i));
         i++;                
         }
         
                       }
                       return rookArray     
    }
     
}