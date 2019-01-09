import { checkAllRows, checkAllBoxes, checkAllColumns } from './sudoku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validBoard = [
  [1,2,3,4,5,6,7,8,9],
  [4,5,6,7,8,9,1,2,3],
  [7,8,9,1,2,3,4,5,6],
  [2,3,4,5,6,7,8,9,1],
  [5,6,7,8,9,1,2,3,4],
  [8,9,1,2,3,4,5,6,7],
  [3,4,5,6,7,8,9,1,2],
  [6,7,8,9,1,2,3,4,5],
  [9,1,2,3,4,5,6,7,8]
].join().split(',');


$(document).ready(function() {
  $('#checker-button').submit(function(event) {
    event.preventDefault();

    var answerArray = [];
    for (var i=0; i < 81; i++) {
      answerArray.push($('#cell-' + i).val());
    }

    function typeCheck(sudokuBoard){
      if(!checkAllRows(sudokuBoard)) {
        return "Invalid Row";
      } else if(!checkAllColumns(sudokuBoard)){
        return "Invalid Column";
      } else if(!checkAllBoxes(sudokuBoard)) {
        return "Ivalid 3x3 (Su)District";
      } else {
        return "You won the Sudoku thing!";
      }
    }

    var sudokuBoard = [];
    for(var row = 0; row < 81; row+=9) {
      var rowArray = answerArray.slice(row, row+9);
      sudokuBoard.push(rowArray);
      console.log(rowArray);
    }
    // debugger;
    console.log(checkAllRows(sudokuBoard));
    console.log(checkAllColumns(sudokuBoard));
    console.log(checkAllBoxes(sudokuBoard));
    var validityCheck = typeCheck(sudokuBoard);

    $('#result-reply').text(validityCheck);

  });

  $('#jumble-button').submit(function(event) {
    event.preventDefault();
    var answerArray = [];
    for (var i=0; i < 81; i++) {
      if (Math.round(Math.random())==1){
        $('#cell-'+i.toString()).attr('disabled', true);
        $('#cell-' + i).val(validBoard[i].toString());
      } else {
        $('#cell-'+i.toString()).attr('disabled', false);
        $('#cell-' + i).val('');
      }
      var cell = $('#cell-' + i).val();
      answerArray.push(parseInt(cell));
    }

  });

});
