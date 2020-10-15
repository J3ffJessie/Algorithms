// const arrayLoop = (arr, numberOfLoops) => {
//     let i = 0;
//     while (i < numberOfLoops) {
//       for (const idx in arr) {
//         console.log(arr[idx]);
//       }
//       console.log("--------");
//       i++;
//     }
//   };



//Use one for loop or one while loop
// Must use Modulus (%) operator
//console.log every element and break iterations by a ----


const math = [
    'sucks', 'really sucks', 'dreadful', 'hate algorithms',
    'sucks', 'really sucks', 'dreadful', 'hate algorithms',
    'sucks', 'really sucks', 'dreadful', 'hate algorithms',
    'sucks', 'really sucks', 'dreadful', 'hate algorithms',
    'sucks', 'really sucks', 'dreadful', 'hate algorithms'];

const circularArray = (arr, numberOfLoops) => {
    let i = 0;
    while(i < (arr.length % numberOfLoops)){
        console.log(i);
        console.log("-------");
        i++;
    }
};

circularArray(math,8);