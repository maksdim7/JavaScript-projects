const workerAnalytics = function (arr) {
  let workerOBJ = {
    totalHours: 0,
    avgDailyHours: 0,
    highestHoursDay: 0,
    numberOfDays: 0,
    fullWorkWeek: false,
  };

  let sumTotalHours = 0;
  let avgDaily = 0;
  let highestDay = arr[0];
  let workingDays = arr.length;
  for (let i = 0; i < arr.length; i++) {
    sumTotalHours += arr[i];
    avgDaily = sumTotalHours / arr.length;
    if (arr[i] > highestDay) {
      highestDay = arr[i];
    }
    if (sumTotalHours >= 35) {
      workerOBJ.fullWorkWeek = true;
    }
  }

  workerOBJ.totalHours = sumTotalHours;
  workerOBJ.avgDailyHours = Number(avgDaily.toFixed(2));
  workerOBJ.highestHoursDay = highestDay;
  workerOBJ.numberOfDays = workingDays;

  return workerOBJ;
};

console.log(workerAnalytics([7.5, 8, 6.5, 0, 8.5, 5, 0]));
