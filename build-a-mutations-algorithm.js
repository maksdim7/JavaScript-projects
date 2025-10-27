function mutation(array){
  let firstStr = array[0].toLowerCase();
  let secondStr = array[1].toLowerCase();
  for(let char in secondStr){
    if(!firstStr.includes(secondStr[char])){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));