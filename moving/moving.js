

const average = 3;
// 1 array

// 2 new array MA
const stocklosingnumber = [9 , 8, 12 , 50, 30, 10, , 12, 7];
const movingAverage = []; 

// 3 slice method
const threedatapoints = stocklosingnumber.slice(0, average);

// 4 sum / 3
threedatapoints.reduce((total, num) => total + num) / 3;
// 5 push new value  into MA array
// 6 for loop for this
// 7 stop the loop once we hit less than 3 datapoints 