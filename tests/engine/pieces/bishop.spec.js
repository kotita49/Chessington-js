import Bishop from '../../../src/engine/pieces/bishop';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import 'chai/register-should';

describe('Bishop', () => {
    let board;
    beforeEach(() => board = new Board());    
    
    it('can move diagonally ', () => {
        const bishop = new Bishop(Player.WHITE);
        
        board.setPiece(Square.at(0, 2), bishop);
        
        const moves = bishop.getAvailableMoves(board);
        
      // moves.should.have.length(1);
       moves.should.deep.include.members([Square.at(1, 3), Square.at(2, 4), Square.at(3,5), Square.at(4, 6), Square.at(5, 7), Square.at(1, 1), Square.at(2, 0)]);
    });
});
