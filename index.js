// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby', 'Annie', 'Borat']


// findMatching takes an array of drivers's names & a string of as arguments.
//    it takes two arguments
// 1) argument array = list of drivers
// 2) argument str = is the name that is trying to match in the drivers array
// 3) the function should be case sensistive
//    str and the array need to be converted to all Uppercase or all Lowercase 

const findMatching = (array, query) => {
  let qStr = query.toLowerCase()
  const match = array.filter(str => qStr === str.toLowerCase())
  return match
}

console.log(findMatching(drivers, "boBBy"))


const fuzzyMatch = (array, query) => {
  let qStr = query.toLowerCase()
  let len = qStr.length
  const queryMatch = array.filter(str => qStr === str.toLowerCase().slice(0, len))
  return queryMatch 
}

console.log(fuzzyMatch(drivers, "Ann"))


const drivers2 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

/*
matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
*/

const matchName = (array, query) => {
    let qStr = query.toLowerCase()
    //console.log(newArray)
    const queryMatch = array.filter(str => qStr === str.name.toLowerCase())
    return queryMatch
}

console.log(matchName(drivers2, "BobBy"))





// function findMatching(array, str) {
//   //let newArray = []
//   let lowerArray = []
//   let lowerCaseName = str.toLowerCase()
//   for (item of array) {
//     let newItem = item.toLowerCase()
//     lowerArray.push(newItem)
//     console.log(lowerArray)
//     if (newItem === lowerCaseName) {
//       return array.item
//     }
//   }
//   return lowerArray

// }

// findMatching(drivers, "bobby")
// const test = "hello"
// console.log(test.toUpperCase())
