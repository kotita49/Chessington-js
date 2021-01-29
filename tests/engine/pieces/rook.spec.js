import Rook from '../../../src/engine/pieces/rook';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import 'chai/register-should';

describe('Rook', () => {
    let board;
        beforeEach(() => board = new Board());    
        
        it('can move vertically, through any number of unoccupied squares', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);
            
            
            const moves = rook.getAvailableMoves(board);
            
           //moves.should.have.length(1);
           moves.should.deep.include.members([Square.at(1, 0), Square.at(2, 0), Square.at(3,0), Square.at(4,0), Square.at(5, 0), Square.at(6,0), Square.at(7,0)]);
        });

        it('can move horizontally through any number of unoccupied squares', () => {
            const rook = new Rook(Player.WHITE);
            
            board.setPiece(Square.at(0, 0), rook);
            
            const moves = rook.getAvailableMoves(board);
            
           //moves.should.have.length(1);
           moves.should.deep.include.members([Square.at(0, 4), Square.at(0, 2), Square.at(0,3), Square.at(0,1), Square.at(0, 5), Square.at(0,7), Square.at(0,6)]);
        });
        it('can have 14 possible moves', () => {
            const rook = new Rook(Player.WHITE);
            
            board.setPiece(Square.at(0, 0), rook);
            
            const moves = rook.getAvailableMoves(board);
            
           moves.should.have.length(14);
        });

});


