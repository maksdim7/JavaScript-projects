const questions = [
  {
   category: "Sports",
   question: "How many Golden Balls do Cristiano Ronaldo have?",
   choices: ["3","4","5"],
   answer: "5"
   },
  {
   category: "General knowledge",
   question: "How many days are in a week?",
   choices: ["5","6","7"],
   answer: "7"
   },
   {
    category: "Biology",
    question: "How many teeths do humans have?",
    choices: ["28","30","32"],
    answer: "32"
   },
   {
    category: "History",
    question: "When do Bulgaria frees itself from Ottoman rulling?",
    choices: ["1870","1878","1880"],
    answer: "1878"
   },
   {
    category: "Cars",
    question: "What's the speed limit for driving on the motorway in Bulgaria?",
    choices: ["140","120","130"],
    answer: "140"
   }
];

function getRandomQuestion(arr){
    let randInx = Math.floor(Math.random() * (arr.length - 0))
    return arr[randInx]
}

function getRandomComputerChoice(choicesArr){
    let randInx = Math.floor(Math.random() * (choicesArr.length - 0))
    return choicesArr[randInx]
}

let randQ = getRandomQuestion(questions);
let rightAns = randQ.answer;
let randAns = getRandomComputerChoice(randQ.choices);



function getResults(randQ,randAns){
    if(randAns == randQ.answer){
      return "The computer's choice is correct!"
    } else {
      return `The computer's choice is wrong. The correct answer is: ${randQ.answer}`
    }
}

console.log(randQ);
console.log(randAns);
console.log(randAns == randQ.answer);
console.log(getResults(randQ,randAns));