
//Cohorts: James Hardy, Ben Lynch

const parentElement = document.querySelector(".kata-lists")
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
let heading1 = document.createElement ('p')
parentElement.append(heading1)
heading1.append('Kata 1')

let kata1 = []
let counter = 1
while (counter <= 20){
    kata1.push(counter)
    counter += 1
}
parentElement.append(kata1)

let heading2 = document.createElement ('p')
parentElement.append(heading2)
heading2.append('Kata 2')

let kata2 = []
let counter2 = 2
while (counter2 <= 20){
    kata2.push(counter2)
    counter2 += 2
      }
parentElement.append(kata2)


let heading3 = document.createElement ('p')
parentElement.append(heading3)
heading3.append('Kata 3')

let kata3 = []
let counter3 = 1
while(counter3 <= 20){
   kata3.push(counter3)
    counter3 += 2
}
parentElement.append(kata3)

let heading4 = document.createElement ('p')
parentElement.append(heading4)
heading4.append('Kata 4')

let kata4 = []
let counter4 = 5
  while (counter4 <= 100){
    kata4.push(counter4)
    counter4 += 5
 }
 parentElement.append(kata4)

 let heading5 = document.createElement ('p')
parentElement.append(heading5)
heading5.append('Kata 5')

let kata5 = []
let counter5 = 1
  while (counter5 <= 100){
   let counter5square = Number.isInteger(Math.sqrt(counter5))
    if (counter5square){
    
    kata5.push(counter5)}
    counter5 += 1
  }
  parentElement.append(kata5)

  let heading6 = document.createElement ('p')
  parentElement.append(heading6)
  heading6.append('Kata 6')

  let kata6 = []
  let counter6 = 20
while (counter6 >= 1){
  kata6.push(counter6)
  counter6 -= 1
}
parentElement.append(kata6)

let heading7 = document.createElement ('p')
  parentElement.append(heading7)
  heading7.append('Kata 7')

  let kata7 = []
  let counter7 = 20
 while (counter7 >= 2){
   kata7.push(counter7)
    counter7 -= 2
  }
  parentElement.append(kata7)

  let heading8 = document.createElement ('p')
  parentElement.append(heading8)
  heading8.append('Kata 8')

  let kata8 = []
  let counter8 = 19
  while (counter8 >= 1){

    kata8.push(counter8)
    counter8 -= 2}
parentElement.append(kata8)

let heading9 = document.createElement ('p')
  parentElement.append(heading9)
  heading9.append('Kata 9')

let kata9 = []
let counter9 = 100
  while (counter9 >= 1){
    kata9.push(counter9)
    counter9 -= 5
  }
  parentElement.append(kata9)

  let heading10 = document.createElement ('p')
  parentElement.append(heading10)
  heading10.append('Kata 10')

  let kata10= []
  let counter10 = 100
  while (counter10 >= 1){
    let counter10square = Number.isInteger(Math.sqrt(counter10))
    if (counter10square){
    
    kata10.push(counter10)}
    counter10 -= 1
  }
parentElement.append(kata10)

let heading11 = document.createElement ('p')
  parentElement.append(heading11)
  heading11.append('Kata 11')

let kata11 = []
kata11.push(sampleArray)

parentElement.append(kata11)

let heading12 = document.createElement ('p')
  parentElement.append(heading12)
  heading12.append('Kata 12')

let kata12 = []
let counter12 = 0
while (counter12 <= sampleArray.length){
    counter12 += 1
    if (sampleArray[counter12] % 2 === 0){
        kata12.push(sampleArray[counter12])
       
    }
}
parentElement.append(kata12)

let heading13 = document.createElement ('p')
  parentElement.append(heading13)
  heading13.append('Kata 13')

let kata13 = []
let counter13 = 0
while (counter13 <= sampleArray.length){
    counter13 += 1
    if ((sampleArray [counter13] % 2) !== 0){
        kata13.push(sampleArray[counter13])
       
    }
}
parentElement.append(kata13)

let heading14 = document.createElement ('p')
  parentElement.append(heading14)
  heading14.append('Kata 14')

let kata14 = []
let counter14 = 0
while (counter14 <= sampleArray.length){
    let squareRoot = sampleArray[counter14] * sampleArray[counter14] 
    kata14.push(squareRoot)
    counter14 += 1

}
parentElement.append(kata14)

let heading15 = document.createElement ('p')
  parentElement.append(heading15)
  heading15.append('Kata 15')

let kata15 = []
let counter15 = 0
while (counter15 <= 20){
    kata5.push(counter15)
    counter15 += 1
    let addThem = kata15.reduce(Math.sum)
}
parentElement.append(addThem)
















  




  





