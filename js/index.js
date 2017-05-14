$(document).ready(function() {
  
  var inputs = [""];
  var strTotal = "";
  
  var dot = ["."];
  var operators = ["+", "-", "*", "/"];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  
  function update() {
    strTotal = inputs.join("");
    $('#output').html(strTotal);
  }
  
  function getVal(val) {
    if (dot.includes(inputs[inputs.length - 1] === true && val === ".")) {
      console.log("duplicated '.'");
    } else if (inputs.length === 1 && operators.includes(val) === false) {
      inputs.push(val);
    } else if (dot.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(val);
    } else if (nums.includes(Number(val))) {
      inputs.push(val);
    } else if (inputs[0] === "0") {
      inputs.pop(val);
      inputs.push(val);
    }
    
    update();
  }
  
  function total() {
    strTotal = inputs.join("");
    $('#output').html(eval(strTotal));
    
    inputs = [""];
  }
  
  $("button").click(function() {
    if (this.id === "AC") {
      inputs = [""];
      update();
    } else if (this.id === "CE") {
      inputs.pop();   
      update();
      
      if (inputs.length === 0) {
        inputs = [""];
      }
    } else if (this.id === "equal") {
      total();
    } else {
      if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*") === -1) {
        getVal(this.id);
      } else {
        getVal(this.id);
      }
    }
  });
  
});