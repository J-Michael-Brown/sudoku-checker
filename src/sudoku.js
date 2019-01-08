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

function checkAllRows(sudokuBoard) {
  var valid = true;
  sudokuBoard.forEach(function(row) {
    if(!viable(row)) {
      valid = false;
    }
  });
  return valid;
}

function checkAllColumns(sudokuBoard) {
    var masterCheckArray = [];
    var checkArray1 = [];
    var checkArray2 = [];
    var checkArray3 = [];
    var checkArray4 = [];
    var checkArray5 = [];
    var checkArray6 = [];
    var checkArray7 = [];
    var checkArray8 = [];
    var checkArray9 = [];

  sudokuBoard.forEach(function(array) {
    checkArray1.push(array[0])
    checkArray2.push(array[1])
    checkArray3.push(array[2])
    checkArray4.push(array[3])
    checkArray5.push(array[4])
    checkArray6.push(array[5])
    checkArray7.push(array[6])
    checkArray8.push(array[7])
    checkArray9.push(array[8])
  });
    masterCheckArray.push(checkArray1)
    masterCheckArray.push(checkArray2)
    masterCheckArray.push(checkArray3)
    masterCheckArray.push(checkArray4)
    masterCheckArray.push(checkArray5)
    masterCheckArray.push(checkArray6)
    masterCheckArray.push(checkArray7)
    masterCheckArray.push(checkArray8)
    masterCheckArray.push(checkArray9)

    return checkAllRows(masterCheckArray);

};
