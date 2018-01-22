{var myNumber = 42;
var myName = 'Dustin';
var temp = 0;
temp = myNumber
myNumber = myName
myName = temp}

{for(var i = -52; i < 1067; i++)
console.log(i)}

function beCheerful(){
    for(var i=1; i < 99; i++){
        console.log('good morning!')}
    }
console.log(beCheerful())

for(var i = -300; i < 1; i=i+3){
    if (i == -3 || i == -6){
        continue}
  console.log(i)}

var i = 2000
while (i < 5281)
{ console.log(i);
    i++}

    var Day = Math.floor(Math.random() * 31)
    var Month = Math.floor(Math.random() * 31)
    if (Day == 14 && Month == 6 || Day == 6 && Month == 14){
        console.log('How did you know?')
    } else {console.log('Just another day')
}
console.log(Day, Month)

function Leap(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
         console.log(true)
    } else(console.log(false))
} Leap(2632) // Test

var count = 0
for(var i = 515; i < 4096; i+=5){
    console.log(i)
    count++
}   console.log(count)

var i = 6
while(i < 60001){
    console.log(i)
    i+=6}

for(var i = 1; i < 101; i++){
    if(i % 10 === 0){
            console.log('Coding Dojo')
        } else if(i % 5 === 0){
            console.log('Coding')
        } else{console.log(i);}
    }

