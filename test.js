// /*
// Map Transformers
// Using map, return an array of each transformer's value of its 'form' property 
// */
// //result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']
console.log(' #1.')
const transformersMap = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ];
      const forms = transformers.map(transformer=>{
        return transformer.form
      })
      console.log(forms)
}
transformersMap()

//     /*
// Filter Transformers
// Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

// result: [ {
//           name: 'Optimus Prime',
//           form: 'Freightliner Truck',
//           team: 'Autobot'
//         },
//          {
//           name: 'Bumblebee',
//           form: 'VW Beetle',
//           team: 'Autobot'
//         }
//     ]

// */
console.log(' #2.')
const transformersFilter = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]
      const autobots = transformers.filter(
        (transformer) => transformer.team === 'Autobot'
      )
      console.log(autobots)
}
transformersFilter()

// /*
// Reduce Transformers
// Using reduce, return an object that has a count for each team of transformer
// result: {
//     Autobot: 2,
//     Decepticon: 2
// }
// */
// const reduceTransformers = () => {
//     let transformers = [
//         {
//           name: 'Optimus Prime',
//           form: 'Freightliner Truck',
//           team: 'Autobot'
//         },
//         {
//           name: 'Megatron',
//           form: 'Gun',
//           team: 'Decepticon'
//         },
//         {
//           name: 'Bumblebee',
//           form: 'VW Beetle',
//           team: 'Autobot'
//         },
//         {
//           name: 'Soundwave',
//           form: 'Walkman',
//           team: 'Decepticon'
//         }
//       ]
//       const autosAndDecepticon = transformers.reduce((acc, cur) =>{
//        const teams = cur.team
//        return acc
//       //  if(acc[teams]){
//       //    acc[teams] = acc[teams] +1;
//       //  } else{
//       //    acc[teams] = 1
//       //  }
//       })
//       // console.log(autosAndDecepticon)
// }
// reduceTransformers()




/*

Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42
console.log(' #3.')
const sumPositiveElement = () => {
    const input = [ 1, -4, 12, 0, -3, 29, -150]
    const positive = input.filter(
       (input) => input >= 0
    )
    .reduce((acc, cur) => {
      return acc + cur
    }, 0) //set acc to starting value
    console.log(positive)
}
sumPositiveElement()

/* 
Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Use: reduce, sort, Math.abs
*/
//result: { mean: 38.5, median: 32 } //get total / all - find closest # to mean
console.log(' #4.')
const medianMean = () => {
    const input = [12, 46, 32, 64]
    // input.sort((a, b) => a-b)
    const means = input.reduce((acc, cur, index, array) =>{
      // console.log(acc, cur, array.length)
      return ((acc += cur) / array.length)
    }, 0)
    console.log(means)
}
medianMean()

/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/

//result: 'GRRM'
console.log(' #5.')
const nameInitials = () => {
    const input = 'George Raymond Richard Martin'
    .split(' ')
    .map(name => name[0])
    .join('')
  console.log(input)
}
nameInitials()

/*
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
console.log(' #6.')
const ageDifference = () => {
    const input = [
        {
          name: 'John',
          age: 13
        },
        {
          name: 'Mark',
          age: 56,
        },
        {
          name: 'Rachel',
          age: 45,
        },
        {
          name: 'Nate',
          age: 67,
        },
        {
          name: 'Jeniffer',
          age: 65,
        }
      ];
      const max = Math.max.apply(Math, input.map(data=>{
        return (data.age)
      }))
      const min = Math.min.apply(Math, input.map(data=>{
        return (data.age)
      }))
      const diff = max - min
      console.log(min, max, diff)
}
ageDifference()

//  const forms = transformers.map(transformer=>{
//         return transformer.form
//       })
//       console.log(forms)