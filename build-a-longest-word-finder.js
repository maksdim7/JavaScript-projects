function findLongestWordLength(sentence){
  let longestLen = 0;
  const arrWords = sentence.split(" ");
  for(let i =0;i<arrWords.length;i++){
    if(arrWords[i].length > longestLen){
      longestLen = arrWords[i].length;
    }
  }
  return longestLen
}