// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, str ){
   return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
}
console.log(findMatching(drivers, 'bobby',))
console.log(findMatching(drivers, 'Sally',))
console.log(findMatching(drivers, 'Susan',))


function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()))
}
console.log(fuzzyMatch(drivers, "Sa"))
console.log(fuzzyMatch(drivers, "y"))
console.log(fuzzyMatch(drivers, "mm"))

const driversArray = [
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

  function matchName(drivers, str){
    return drivers.filter(driver => driver.name === str)
  }
  console.log(driversArray, 'Bobby')
