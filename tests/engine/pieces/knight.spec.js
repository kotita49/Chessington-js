import Knight from '../../../src/engine/pieces/knight';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import 'chai/register-should';

describe('Knight', () => {
    let board;
    beforeEach(() => board = new Board());    
    
    it('can move 3 squares vertically plus 2 horizontally', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0, 1), knight);
                
        const moves = knight.getAvailableMoves(board);
        
      moves.should.deep.include.members([Square.at(2, 2), Square.at(2, 0), Square.at(1, 3)]);
    });
});
