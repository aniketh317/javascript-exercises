const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arg) {
	let ret = 0;
  for(i=0;i<arg.length;i++)
    ret += arg[i];
  return ret;
};

const multiply = function() {
  let ret = 1;
  if(arguments.length == 1)
  {
    for(i=0;i<arguments[0].length;i++)
      ret *= arguments[0][i];
  }
  else
    ret = arguments[0]*arguments[1];
  return ret;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let ret = 1;
  for(i=1;i<=a;i++)
    ret = ret*i;
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
