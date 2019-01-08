export function viable(arrayOfNine) {
  const cleanedArray = arrayOfNine.filter(input => (input.length > 0 || input != undefined));
  const inputLength = arrayOfNine.length;
  const checkLength = [...new Set(cleanedArray)].length;
  if (inputLength == checkLength) {
    return true;
  } else {
    return false;
  }
}

export function checkAllRows(sudokuBoard) {
  var valid = true;
  sudokuBoard.forEach(function(row) {
    if(!viable(row)) {
      valid = false;
    }
  });
  return valid;
}

export function checkAllColumns(sudokuBoard) {
  // sudokuBoard.forEach(function(rowArray) {
  // go through master array and build arrays representing columns
  for (var columnIndex = 0; columnIndex < sudokuBoard[0].length; columnIndex++) {
    var column = [];
    var viability = true;
    for (var rowIndex = 0; rowIndex < sudokuBoard.length; rowIndex++){// for each row, push the number in the given column
      column.push(sudokuBoard[rowIndex][columnIndex]);
    }
    if(!viable(column)){
      viability = false;
    }
  }
  return viability;

}

export function checkAllBoxes(sudokuBoard) {
  var valid = true;


  return [valid, sudokuBoard];
}
