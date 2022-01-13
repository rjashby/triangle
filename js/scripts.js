$(document).ready(function() {
  $("form").submit (function(event) {
    event.preventDefault();
    let side1 = $("input#side1").val();
    let side2 = $("input#side2").val();
    let side3 = $("input#side3").val();
    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#not").hide();
    console.log(side1);
    console.log(side2);
    console.log(side3);

    if (side1 === side2 && side2 === side3) {
      $("#equilateral").show();
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $("#isosceles").show();
    } else if (side1 != side2 && side1 !== side3 && side2 !== side3) {
      $("#scalene").show();
    } else {
      $("#not").show();
    }
  });
});

// ((side1 = side2 && side1 !== side3) || (side1 = side3 && side1 !== side2) || (side2 === side3 && side2 !== side1)) {
  // $("#isosceles").show();

// } else if ((side1 + side2 >= side3) || (side1 + side3 >= side2) || (side2 + side3 >= side1)) {
//   $("#not").show();