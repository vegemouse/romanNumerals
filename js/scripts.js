var checkSize = function(number){
  if (number > 3999){
    return false;
  }
  else {
    return true;
  }
}
var checkNumber = function(decNum) {
  var parsedNum = parseFloat(decNum.replace(/,/g, ""));
  if (!parsedNum) {
    alert(decNum + " is not a number. Please enter a number.");
  }
  else {
    var size = checkSize(Math.round(parsedNum));
    if (!size) {
      alert(decNum + " is too big! Try again.");
    }
    else {
      return romanNumeralizer(Math.round(parsedNum));
    }
  }
};

var getLength = function(number) {
  return number.toString().length;
}

var romanNumeralizer = function(number) {
  var rnM = 0;
  var rnD = 0;
  var rnC = 0;
  var rnL = 0;
  var rnX = 0;
  var rnV = 0;
  var rnI = 0;
  var length = getLength(number);
  if (length === 4) {
    while (number > 999){
      number = number - 1000;
      rnM++;
    };
    length = getLength(number);
  }
  if (length === 3) {
    while (number > 499){
      number = number - 500;
      rnD++;
    }
    length = getLength(number);
    if (length === 3) {
      while (number > 99) {
        number = number - 100;
        rnC++;
      }
      length = getLength(number);
    }
  }
  if (length === 2) {
    while (number > 49){
      number = number - 50;
      rnL++;
    }
    length = getLength(number);
    if (length === 2) {
      while (number > 9) {
        number = number - 10;
        rnX++;
      }
      length = getLength(number);
    }
  }
  console.log("n" + number);
  if (length === 1) {
    while (number > 4){
      number = number - 5;
      rnV++;
    };
    length = getLength(number);
    if (length === 1) {
      while (number > 0) {
        number = number - 1;
        rnI++;
      }
    }
  }
  var rnAmts = [rnM, rnD, rnC, rnL, rnX, rnV, rnI];
  console.log(rnAmts);
  var rnArr = ["M", "D", "C", "L", "X", "V", "I"];
  var outputArr = [];
  var rn = "";
  var convert9 = false;
  var convert4 = false;
  for (i = 0; i < rnAmts.length; i++) {
    if (rnAmts[i] === 4 && rnAmts[i-1] > 0){
      rnAmts[i] = 1;
      outputArr.pop();
      convert9 = true;
      console.log(convert9);
    }
    if (rnAmts[i] === 4){
      rnAmts[i] = 1;
      outputArr.pop();
      convert4 = true;
      console.log(convert4);
    }
    for (j = 0; j < rnAmts[i]; j++) {
      outputArr.push(rnArr[i]);
    }
    if (convert9 === true){
      outputArr.push(rnArr[i-2]);
      convert9 = false;
    }
    if (convert4 === true){
      outputArr.push(rnArr[i-1]);
      convert4 = false;
    }
  }
  output = outputArr.join("");
  console.log("f" + output);
  return output;
};

$(function() {
  $("form#rn").submit(function(event) {

    var inputDec = $("#decimal").val();
    var rnAnswer = checkNumber(inputDec);
    console.log(rnAnswer);
    $("#roman").text(rnAnswer);
    event.preventDefault();
  })
})
