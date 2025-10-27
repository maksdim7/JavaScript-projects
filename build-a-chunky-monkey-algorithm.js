function chunkArrayInGroups(array,number){
  let returningArr = [];
  let chunkSize = number;

  for(let i = 0; i < array.length; i+=chunkSize){
    let chunk = [];

    for (let j = i; j < i + chunkSize && j < array.length; j++) {
        chunk.push(array[j]);
    }

    returningArr.push(chunk);
  }

  return returningArr;
  
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))