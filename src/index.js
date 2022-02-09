module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let openBracket = [];
  let bracketPair = {};

  bracketsConfig.forEach(element => {
      openBracket.push(element[0]);
      bracketPair[element[1]]=element[0];
  });


  for (let i = 0; i < str.length; i++) {
      
      if(str[i]!==bracketPair[str[i]]) {//not equal pairs

          if (openBracket.includes(str[i])) {//opening
              stack.push(str[i]);
          }
          else {
              if (stack.length === 0 ) return false;
              let stackTop = stack[stack.length-1];
              if (stackTop === bracketPair[str[i]]) stack.pop();
              else return false;
          }
      }
      else {//equal pairs
      
          let stackTop = stack[stack.length-1];
          if(stackTop !== str[i]) stack.push(str[i]);
          else stack.pop();
      }

  }

  return stack.length === 0;

}
