// started at 6:58 2-8-2022

// 1) Understanding the problem
// - What ios temp amplitude? Answer: difference bewteen highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(temps) {

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
};
const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude);

// Problem 2:
// Function should now recieve 2 arrays of temps

// 1) Undertsanding the problem
// - With 2 arrays, should we implement functionality twizce? NO! Just merge two arrays

// 2) Breaking up into sub-arrays
// - Merge 2 arrays

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
};
const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5])
console.log(amplitudeNew);

// Ended at 8:09 2-8-2022
