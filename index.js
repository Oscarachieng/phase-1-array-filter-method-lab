// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
/*function findMatching(name) {
 
    return name === "Bobby" || name === "bobby"
 
}*/
const findMatching = (names, nameValue) => {
    const matchNames = [];
    for (const name of names) {
        name.localeCompare(nameValue, undefined,{sensitivity : 'accent'})
        if (name === nameValue || name === nameValue.toLowerCase()) {
            matchNames.push(name)
        }
        
    }
    return matchNames
    }
 console.log( findMatching(drivers, "Bobby"))

 const fuzzyMatch = (names, nameValue) => {
    const matchNames = [];
    for (const name of names) {
        name.localeCompare(nameValue, undefined,{sensitivity : 'accent'})
        if (name.charAt(0) === nameValue.charAt(0)) {
            matchNames.push(name)
        }
        
    }
    return matchNames
    }
    console.log(fuzzyMatch(drivers, "bobby"))


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


    const matchName = (items, nameToSearch) => {
        
    const match = items.filter(item =>{
            return item.name === nameToSearch
        })
      return match
    }
   

    console.log(matchName(drivers2,"Bobby"))
       
      





  


