// models/action/PlusOperation.model.bxb의 내용과 input, output의 변수명이 일치해야 한다.
module.exports.function = function plusOperation (leftOperand, rightOperand) {
  const console = require('console');
  const result = leftOperand + rightOperand;
  const operatorName = "더하기";
  console.log("result is ",result);
  
  // models/concept/Results.model.bxb에서 정의한 property 이름과 일치해야 한다. 
  const results = {
    operatorName : operatorName,
    result : result
  };
  
  return results;
}
