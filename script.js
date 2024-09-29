$(document).ready(function () {
  $(".options-button").on("click", function () {
    const answer = $(this).data("answer");

    if (answer === "correct") {
      $("#result").text("Correct!").css("color", "green");
    } else {
      $("#result").text("Wrong!").css("color", "red");
    }
  });
});
