// let time = [
//     "2020-08-12 08:00-12:00",
//     "2020-08-13 08:00-09:00",
//     "2020-08-13 12:00-16:00",
//     "2020-08-14 14:00-15:00",
//     "2020-08-15 09:00-17:00"
// ]

// let time = [
//     {date: "2020-08-12",beginTime: "08:00",endTime: "12:00"},
//     {date: "2020-08-13",beginTime: "08:00",endTime: "09:00"},
//     {date: "2020-08-13",beginTime: "12:00",endTime: "16:00"},
//     {date: "2020-08-14",beginTime: "14:00",endTime: "15:00"},
//     {date: "2020-08-15",beginTime: "09:00",endTime: "17:00"}
// ]

// let res =[]
// let narr=[]
// for(let i = 0; i < time.length; i++){
//     let n = res.indexOf( time[i].date )
//     if( n == -1 ){

//         res.push( time[i].date )
//         narr.push( {date: time[i].date, fraction:[time[i].fraction]} )

//     } else {

//         narr[n].fraction.push(time[i].fraction)

//     }
// }



// var Array = [
//     {
//         "22": "333"
//     },
//     {
//         "555": "444"
//     },
//     {
//         "22": "666"
//     }
// ]
// //实现的数组：[{ "22": "333,666"},{"555": "444"}]
// var newArr = []
// Array.map(value => {
//     for (const key in value) {
//         console.log(key)
//         console.log(value)

//         newArr.length ? addArr(newArr, value, key) : newArr.push(value)
//     }
// })
 
// function addArr(newArr, value, key) {
//     newArr.map(newVal => {
//         if (newVal[key] || newArr.some(item => item.hasOwnProperty(key))) {
//             if (newVal[key] && newVal[key] != value[key]) {
//                 newVal[key] = value[key] + ',' + newVal[key]
//             }
//         } else {
//             newArr.push(value)
//         }
//     })
//     return newArr
// }
 

// console.log(newArr)


// let array = [
//     { key: "a", value: "2" },
//     { key: "a", value: "2" },
//     { key: "a", value: "2" },
//     { key: "b", value: "8" }
// ];

let time = [
    {date: "2020-08-12",time: "08:00-12:00"},
    {date: "2020-08-12",time: "13:00-18:00"},

    {date: "2020-08-13",time: "08:00-09:00"},
    {date: "2020-08-13",time: "12:00-16:00"},
    {date: "2020-08-13",time: "16:30-18:00"},

    {date: "2020-08-14",time: "14:00-15:00"},
    {date: "2020-08-15",time: "09:00-17:00"}
]

function addArr( array , date , time){
    let result = {}
    array.forEach((item) => {
        if (result[item[date]]) {
            result[item[date]] +=  ";" + item[time]
        } else {
            result[item[date]] = item[time]
        }
    })

    let s = []
    for (let k in result) {
        s.push({ date: k, time: result[k] });
    }
    return s
}

console.log( addArr( time , "date" , "time" ) )