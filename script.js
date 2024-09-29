$(document).ready(function () {
  //Cand se apasa pe buton
  $(".options-button").on("click", function () {
    //on = event listener in jquery
    const answer = $(this).data("answer");
    //mai sus am selectat atributul data answer
    if (answer === "correct") {
      $("#result").text("Correct!").css("color", "green");
    } else {
      $("#result").text("Wrong!").css("color", "red");
    }
  });
});
