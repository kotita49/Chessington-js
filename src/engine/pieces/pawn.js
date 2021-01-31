import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
       
        //all the moves of pawn
        let location = board.findPiece(this);
       let pawnArray = [];
        if(location.row ==1 && this.player === Player.WHITE){
pawnArray = pawnArray.concat([Square.at(location.row+2, location.col), Square.at(location.row+1, location.col)])
        }else if((location.row !==1 && this.player === Player.WHITE)) {
            pawnArray = pawnArray.concat([Square.at(location.row+1, location.col)])
        } else if(location.row===6 && this.player===Player.BLACK){
            pawnArray = pawnArray.concat([Square.at(location.row-2, location.col), Square.at(location.row-1, location.col)])
        } else { 
            pawnArray = pawnArray.concat([Square.at(location.row-1, location.col)])
        }
        const resultPawnArray = pawnArray.filter(function(locat){
return board.getPiece(locat) == undefined
        })
        return resultPawnArray
    }
}

