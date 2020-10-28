 const matchingBrackets = string => {
    const stack = [];
    const nested = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
  
    for (let index = 0; index < str.length; index++) {
      let char = string.charAt(i);
  
      if (char === "(" || char === "{" || char === "[") stack.push(char);
      else if (char === ")" || char === "}" || char === "]") {
        let frontBracket = stack.pop();
        if (nests[frontBracket] !== char) return false;
      }
    }
    return stack.length === 0;
  };
  