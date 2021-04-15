/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let positiveNumbers = [1, 2, 3, 4, 5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let Data1 = {
    name: 'Rabia',
    surname: 'Ilyas',
    emailAddress: 'rabbiailyas92@gmail.com',
    age : 28
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

Data1.iHaveValidDrivingLicense = true

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete Data1.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let Data2 = {
    name: 'Tony',
    surname: 'Blair',
    emailAddress: 'tony.blair@yahoo.com'
}

    let verifyEmailAddress = Data1.emailAddress !== Data2.emailAddress ? 'They have different email adresses' : 'Same email address, please check for error!!'
    console.log(verifyEmailAddress)


/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

 let totalShoppingCart = 40
   let finalTotal
   let shippingCost= 10
   EligibleForFreeShipping = 50

   if(totalShoppingCart > EligibleForFreeShipping){
       finalTotal = totalShoppingCart
   }
   else{
       finalTotal = totalShoppingCart + shippingCost
   }
   console.log('Your Final Amount to pay is :', finalTotal)



/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoppingCart = 100
    let finalTotal
    let shippingCost= 10
    EligibleForFreeShipping = 50
 
    if(totalShoppingCart > EligibleForFreeShipping){
        finalTotal = totalShoppingCart * 0.2
    }
    else{
        finalTotal = (totalShoppingCart + shippingCost) * 0.2
    }
    console.log('Yay its Black friday!!! Your Final Amount after 20% discount is :', finalTotal,'Euros. ' + 'Enjoy your Purchase')

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car1Properties = {
    brand: 'BMW',
    model: 'BMW i8',
    licensePlate: 'LA 591'
}

let car2Properties = object.assign({}, car1Properties)
 car2Properties.licensePlate = 'DA 698'
let car3Properties = object.assign({}, car1Properties)
car3Properties.licensePlate = 'EL 591'
let car4Properties = object.assign({}, car1Properties)
car4Properties.licensePlate = 'LA 225'
let car5Properties = object.assign({}, car1Properties)
car5Properties.licensePlate = 'LA 123'
let car6Properties = object.assign({}, car1Properties)
car6Properties.licensePlate = 'LA 456'

console.log('Car 1 Properties: ', car1Properties)
console.log('Car 2 Properties: ',car2Properties)
console.log('Car 3 Properties: ',car3Properties)
console.log('Car 4 Properties: ',car4Properties)
console.log('Car 5 Properties: ',car5Properties)
console.log('Car 6 Properties: ',car6Properties)


 

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [
    car1Properties, car2Properties, car3Properties, car4Properties, car5Properties, car6Properties
] 
console.log(carsForRent)


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

 carsForRent.pop()    //removes last car
   carsForRent.shift()   //removes first car


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

 for(let i=0; i<carsForRent.length; i++){
        console.log(carsForRent[i], '. Type of Car Variable is :', typeof car1Properties, '. Type of license plate is :', typeof car1Properties.licensePlate, '. Type of brand is: ',typeof car1Properties.brand)
    }
                                        OR

    console.log('Car 1:' + ' Type of car variable is: ',typeof car1Properties, '. Type of license plate is :', typeof car1Properties.licensePlate, '. Type of brand is: ', typeof car1Properties.brand);
    console.log('Car 2:' + ' Type of car variable is: ',typeof car2Properties, '. Type of license plate is :', typeof car2Properties.licensePlate, '. Type of brand is: ', typeof car2Properties.brand);
    console.log('Car 3:' + ' Type of car variable is: ',typeof car3Properties, '. Type of license plate is :', typeof car3Properties.licensePlate, '. Type of brand is: ', typeof car3Properties.brand);
    console.log('Car 4:' + ' Type of car variable is: ',typeof car4Properties, '. Type of license plate is :', typeof car4Properties.licensePlate, '. Type of brand is: ', typeof car4Properties.brand);
    console.log('Car 5:' + ' Type of car variable is: ',typeof car5Properties, '. Type of license plate is :', typeof car5Properties.licensePlate, '. Type of brand is: ', typeof car5Properties.brand);
    console.log('Car 6:' + ' Type of car variable is: ',typeof car6Properties, '. Type of license plate is :', typeof car6Properties.licensePlate, '. Type of brand is: ', typeof car6Properties.brand);
    


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [car2Properties, car3Properties, car4Properties]
   let totalCars = carsForRent.length + carsForSale.length
   console.log('Total number of cars to Sale and for Rent are:', totalCars);


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

 for(let i=0; i<carsForSale.length; i++){
    console.log('Cars for Sale: ', carsForSale[i]) 
 }


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/