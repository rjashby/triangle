$(document).ready(function() {
  $("form").submit (function(event) {
    event.preventDefault();
    let side1 = $("input#side1").val();
    let side2 = $("input#side2").val();
    let side3 = $("input#side3").val();
    console.log(side1);
    console.log(side2);
    console.log(side3);
  });
});