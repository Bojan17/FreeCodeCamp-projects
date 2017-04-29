var player, comp;
var turn = 0;
var a1, a2, a3, b1, b2, b3, c1, c2, c3;
var compMove;
var boardCheck;
var checkWin;
var xwin = false;
var owin = false;
var newGame;

var newGame = function() {
  $('.square').click(function(event) {
    if (turn === 0) {
      $(this).text('x');
      boardCheck();
      checkWin();
      turn = 1;
      compMove();
      boardMove();
      checkWin();
    }
  });
}

$(document).ready(function() {
  newGame();
});
// MACHINE AI
var compMove = function() {
  if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
    $('.one').text("o");
    turn = 0;
  } else {
    if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
      $('.two').text("o");
      turn = 0;
    } else {
      if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
        $('.three').text("o");
        turn = 0;
      } else {
        if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
          $('.nine').text("o");
          turn = 0;
        } else {
          if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
            $('.seven').text("o");
            turn = 0;
          } else {
            if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
              $('.eight').text("o");
              turn = 0;
            } else {
              if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
                $('.four').text("o");
                turn = 0;
              } else {
                if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
                  $('.six').text("o");
                  turn = 0;
                } else {
                  if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
                    $('.five').text("o");
                    turn = 0;
                  } else { // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                    if (b2 == "") {
                      $('.five').text("o");
                      turn = 0;

                    } else {
                      if (a1 == "") {
                        $('.one').text("o");
                        turn = 0;

                      } else {
                        if (c3 == "") {
                          $('.nine').text("o");
                          turn = 0;

                        } else {
                          if (c2 == "") {
                            $('.eight').text("o");
                            turn = 0;

                          } else {
                            if (b1 == "") {
                              $('.four').text("o");
                              turn = 0;

                            }
                          }
                        }
                      }

                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
// Get values foe check
boardCheck = function () {
    a1 = $('.one').html();
    a2 = $('.two').html();
    a3 = $('.three').html();
    b1 = $('.four').html();
    b2 = $('.five').html();
    b3 = $('.six').html();
    c1 = $('.seven').html();
    c2 = $('.eight').html();
    c3 = $('.nine').html();
};

checkWin = function () { // CHECKS IF X WON
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
    (b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
    (c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
    (a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
    (a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
    (a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
    (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
    ) {
        xWin = true;
        alert('You win!');

    } else { // CHECKS IF O WON
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
        (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
        (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
        (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
        (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
        (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
        (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            alert('Comp win!');

        } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                alert("It's a tie!");
            }
        }
    }
};

var clearBoard = $('#restart').click(function (event) {
    a1 = $('.one').text("");
    b1 = $('.four').text("");
    c1 = $('.seven').text("");
    a2 = $('.two').text("");
    b2 = $('.five').text("");
    c2 = $('.eight').text("");
    a3 = $('.three').text("");
    b3 = $('.six').text("");
    c3 = $('.nine').text("");
    xWin = false;
    oWin = false;
    newGame();
    location.reload();
});
