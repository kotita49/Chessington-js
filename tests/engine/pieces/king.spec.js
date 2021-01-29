import King from '../../../src/engine/pieces/king';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import 'chai/register-should';

describe('King', () => {
    let board;
    beforeEach(() => board = new Board());    
    
    it('can move 1 square vertically', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 4), king);
        
        
        const moves = king.getAvailableMoves(board);
        
      // moves.should.have.length(1);
       moves.should.deep.include.members([Square.at(1, 4)]);
    });

    it('can move 1 square horizontally ', () => {
        const king = new King(Player.WHITE);
        
        board.setPiece(Square.at(0, 4), king);
        
        const moves = king.getAvailableMoves(board);
        
      // moves.should.have.length(1);
       moves.should.deep.include.members([Square.at(0, 5), Square.at(0, 3)]);
    }); it('can move 1 square diagonally ', () => {
        const king = new King(Player.WHITE);
        
        board.setPiece(Square.at(0, 4), king);
        
        const moves = king.getAvailableMoves(board);
        
      // moves.should.have.length(1);
       moves.should.deep.include.members([Square.at(1, 5), Square.at(1, 3)]);
    });

    it('can have 5 possible moves from the edge of the board', () => {
        const king = new King(Player.WHITE);
        
        board.setPiece(Square.at(0, 4), king);
        
        const moves = king.getAvailableMoves(board);
        
       moves.should.have.length(5);
    });
    it('can have 8 possible moves in the middle of the board', () => {
        const king = new King(Player.WHITE);
        
        board.setPiece(Square.at(2, 4), king);
        
        const moves = king.getAvailableMoves(board);
        
       moves.should.have.length(8);
    });

});
