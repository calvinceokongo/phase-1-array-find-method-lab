// // code your solution here


// function superBowlWin["win"] {
//     return (win % 3 === 1);
//   }
// const superbowlWin = [
//     { year: "2015", result:"win"},
//     { year: "2014", result:"win"},
//     { year: "2013", result:"win"},
//     //...
//   ]

// [2015].find(superbowlWin); 
// [2014].find(superbowlWin); 
// [2013].find(superbowlWin); 



const superbowlWin = (record) => {
    const result = record.find(record => record.result === "W")

    if (result) {
        return result.year
    } else {
        return undefined
    }
}