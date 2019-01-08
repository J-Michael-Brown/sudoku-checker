import { viable } from './../src/sudoku.js';

beforeEach(function() {
  const validBoard = [[1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],[2,3,4,5,6,7,8,9,1],[5,6,7,8,9,1,2,3,4],[8,9,1,2,3,4,5,6,7],[3,4,5,6,7,8,9,1,2],[6,7,8,9,1,2,3,4,5],[9,1,2,3,4,5,6,7,8]];
  const badBoard = [[1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],[1,2,3,4,5,6,7,8,9],[5,6,7,8,9,1,2,3,4],[8,9,1,2,3,4,5,6,7],[1,2,3,4,5,6,7,8,9],[6,7,8,9,1,2,9,4,5],[9,1,2,3,4,5,6,7,8]];
});

describe('viable', function() {


  it("validates unique values in a given array", function() {
    var sudokuRowFalse = [1,2,3,4,5,6,7,8,8]
    var sudokuRowTrue = [1,2,3,4,5,6,7,8,9]
    expect(viable(sudokuRowFalse)).toEqual(false)
    expect(viable(sudokuRowTrue)).toEqual(true)
  });
  it("ignores invalid array values during check", function() {
    var sudokuRowFalse = [1,2,,4,5,,7,8,8]
    var sudokuRowTrue = [1,,3,4,,6,7,8,9]
    expect(viable(sudokuRowFalse)).toEqual(false)
    expect(viable(sudokuRowTrue)).toEqual(true)
  });

});

describe('checkAllRows', function() {

  it('should return false for boards that contain a non-viable row, true for all valid rows', function() {
    expect(checkAllRows(validBoard)).toEqual(true);
    expect(checkAllRows(badBoard)).toEqual(false);
  });

});
