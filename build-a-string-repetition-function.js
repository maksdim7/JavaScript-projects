function repeatStringNumTimes(string,number){
  if(number <= 0){
    return "";
  } else {
    let returningArr = [];
    for(let i = 0; i < number; i++){
      returningArr.push(string);
    }
    let returningStr = returningArr.join("");
    return returningStr;
  }
}

repeatStringNumTimes("*", 3)