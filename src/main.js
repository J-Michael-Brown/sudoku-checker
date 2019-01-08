import { checkAllRows, checkAllBoxes, checkAllColumns } from './sudoku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#checker-button').submit(function(event) {
    event.preventDefault();
    console.log("it worked!");
    var answerArray = []

    for (var i=0; i < 81; i++) {
      var cell = $('#cell-' + i).val();
      answerArray.push(parseInt(cell));
    }


    var sudokuBoard = []
    for(var row = 0; row < 81; row+=9) {
      var rowArray = answerArray.slice(row, row+9);
      sudokuBoard.push(rowArray);
      console.log(rowArray);
    }
    console.log(checkAllRows(sudokuBoard));
    console.log(checkAllColumns(sudokuBoard));
    console.log(checkAllBoxes(sudokuBoard));

    $('#result.reply').append("true");
  });
});
