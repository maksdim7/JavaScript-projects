const printForecast = function (arr) {
  let result = "...";
  for (let i = 0; i < arr.length; i++) {
    let addPrintMsg = ` ${arr[i]}C in ${i + 1} days ...`;
    result = result.concat(addPrintMsg);
  }
  return console.log(result);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
