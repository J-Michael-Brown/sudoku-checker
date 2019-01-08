export function viable(arrayOfNine) {
  const cleanedArray = arrayOfNine.filter(input => ((typeof(input)=='number' && input>0 && !input.isNaN) || (typeof(input)=='string' && input.length>0)));
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
  var singleCheck = true;
  for (var columnIndex = 0; columnIndex < sudokuBoard[0].length; columnIndex++) {
    var column = [];
    var viability = true;
    for (var rowIndex = 0; rowIndex < sudokuBoard.length; rowIndex++){// for each row, push the number in the given column
      column.push(sudokuBoard[rowIndex][columnIndex]);
    }
    singleCheck = viable(column);
    if(!singleCheck){
      viability = false;
    }
  }
  return viability;

}

export function checkAllBoxes(sudokuBoard) {
  var valid = true;
  var singleCheck = true;

  for (var chunkRow = 0; chunkRow < 9; chunkRow+=3 ) {
    var crate = [];
    for (var chunkColumn = 0; chunkColumn < 9; chunkColumn+=3) {
      var box = []
      var chunkSlice = sudokuBoard[chunkRow].slice(chunkColumn,chunkColumn+3);
      box = box.concat(chunkSlice);
      chunkSlice = sudokuBoard[chunkRow+1].slice(chunkColumn,chunkColumn+3);
      box = box.concat(chunkSlice);
      chunkSlice = sudokuBoard[chunkRow+2].slice(chunkColumn,chunkColumn+3);
      box = box.concat(chunkSlice);
      crate.push(box);
    }
    crate.forEach(function(box) {
      singleCheck = viable(box);
      if(!singleCheck){
        valid = false;
      }
    });
  }

  return valid;
}
