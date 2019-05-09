module.exports.function = function calculator (leftOperand, rightOperand, operator) {
  const sonsole = require('console');
  let result = 0;
  let operatorName ='';
  
  operator = String(operator);
  if(operator === "plus"){
    operatorName = "더하기";
    result = leftOperand + rightOperand;
  }else if(operator === "subtract"){
    operatorName = "빼기";
    result = leftOperand - rightOperand;
  }else if(operator === "multiplication"){
    operatorName = "곱하기";
    result = leftOperand * rightOperand;
  }else if(operator === "division"){
    operatorName = "나누기(정수형으로 반올림하여 제공)";
    result = parseInt(leftOperand / rightOperand);
  }
  
  const results = {
    operatorName : operatorName,
    result : result
  };
  
  return results;
}
