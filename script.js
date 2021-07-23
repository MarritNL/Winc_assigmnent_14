/* const myAge = 19;
const isFemale = true
const driverStatus = "bob"
const firstName = "Haras"
const totalAmount = 32
 */

const myAge = 50;
const isFemale = false
const driverStatus = "henk"
const firstName = "Sarah"
const totalAmount = 10

if (myAge < 18) {
    document.write ("You are too young, you can't enter. ");
} else if (myAge === 18) {
    document.write ("You can enter. ");
} else {
     document.write ("You can enter. ");
} 

document.write (" --       --")

if (isFemale) {
    document.write (" Would you like to buy some tickets?")
} else { 
    document.write (" I am sorry but you can't buy tickets, we are really biased here.")
}

document.write (" --       --")

if (driverStatus == "Bob") {
    document.write (" You can drive. ");
} else{
    document.write (" You can't drive. Call a taxi. ");
} 

document.write (" --       --")

if (myAge >= 18 && myAge <= 25) {
    document.write (' You get a 50% discount! ');
} else {
    document.write (' You are too old... you have to pay our regular price. ');
}

document.write (" --       --")

if (firstName == "Sarah" || firstName == "Bram") { 
    document.write ( ' Congratulations! You won a free drink. ');
} else { 
    document.write ( ' Your name is not Sarah or Bram.. Do not bother me and go buy your own drinks... ');
}

document.write (" --       --")

if (totalAmount >= 100) {
    document.write (" Congratulations, you big spender you! You won a free bottle of champagne!")
} else if (totalAmount >= 50) {
    document.write (" Congratulations, you won Nachos. Enjoy! ")
} else if (totalAmount >= 25) {
    document.write (" Congratulations, you won Bitterballen. Would you like the vegan option? Enjoy! ")
} else { 
    document.write (" You frugal you! Didn't you learn that to make food you have to spend on food?");
}

