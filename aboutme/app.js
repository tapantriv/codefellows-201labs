
var guestName = prompt ('Hi there friend. What is your Name!');
  alert('Nice to meet you ' + guestName);
    console.log('guest name is ' + guestName);

// Tapankumar Trivedi helped me on the fist block of if else if else statements
//this is the blind question 1
var blind = prompt('First Question ' + guestName + '. Are you blind?');

  if(blind.toLowerCase() === 'yes'||blind.toLowerCase() ==='y'){
    alert('Sorry you cannot continue ' + guestName)
      console.log('Answer is ' + blind)
    }
  else if(blind.toLowerCase() === 'no'||blind.toLowerCase() ==='n'){
    alert('You can read the next statement')
      console.log('Answer is ' + blind)
    }
  else{
    alert('Sorry not a valid answer')
      console.log('Answer is ' + blind)
  }
  
//this is the hungry question 2
  var hungry = prompt('Second Question ' + guestName + '. Are you Hungry?')

    if(hungry.toLowerCase() === 'yes'||hungry.toLowerCase() === 'y'){
      alert('Sorry to hear that ' + guestName + ' lets eat')
        console.log('Answer is ' + hungry)
      }
    else if(hungry.toLowerCase() === 'no'||hungry.toLowerCase() === 'n'){
      alert('Awesome ' + guestName + ' moving on')
        console.log('Answer is ' + hungry)
      }
    else{
      alert('Sorry not a valid answer')
        console.log('Answer is ' + hungry)
        }
 
//this is the happy question 3
  var happy = prompt('Third Question ' + guestName + '. Are you Happy?')

    if(happy.toLowerCase() === 'yes'||happy.toLowerCase() === 'y'){
      alert('Good for you ' + guestName + ' let\'s Continue')
        console.log('Answer is ' + happy)
      }
    else if(happy.toLowerCase() === 'no'||happy.toLowerCase() === 'n'){
      alert('Imagine walking Penguins ' + guestName + ' and smile')
        console.log('Answer is ' + happy)
          }
    else{
      alert('Sorry not a valid answer')
        console.log('Answer is ' + happy)
            }

//this is the sleep question 4
  var sleep = prompt('Eve of questioning ' + guestName + '. Are you Sleepy?')

    if(sleep.toLowerCase() === 'yes'||sleep.toLowerCase() === 'y'){
      alert('You need to catch some zzzzz ' + guestName + ' take a nap')
        console.log('Answer is ' + sleep)
      }
    else if(sleep.toLowerCase() === 'no'||sleep.toLowerCase() === 'n'){
      alert('Good job!!! Rest is important ' + guestName + '. You have bright eyes')
        console.log('Answer is ' + sleep)
          }
    else{
      alert('Sorry not a valid answer')
        console.log('Answer is ' + sleep)
            }

//this is the ready question 5 thinking about using the switch function
  var ready = prompt('You have patients...last question ' + guestName + '. Are you Ready?')

    if(ready.toLowerCase() === 'yes'||ready.toLowerCase() === 'y'){
      alert('You are the best ' + guestName + ' You have a great future')
        console.log('Answer is ' + ready)
      }
    else if(ready.toLowerCase() === 'no'||ready.toLowerCase() === 'n'){
      alert('Awesome ' + guestName + ' moving on')
        console.log('Answer is ' + ready)
          }
    else{
      alert('Sorry not a valid answer')
        console.log('Answer is ' + ready)
            }
document.getElementById('guestName').innerHTML = guestName;
document.getElementById('blind').innerHTML = blind;
document.getElementById('hungry').innerHTML = hungry;
document.getElementById('happy').innerHTML = happy;
document.getElementById('sleep').innerHTML = sleep;
document.getElementById('ready').innerHTML = ready;





//variables that I am using are guestName, blind, hungry, happy,
// sleep, ready


//this is lab 03 for loop questioning
alert('Congradulations ' + guestName + ' There is another game. This is a guessing game')
 var myTeeth = 32;
for(var i = 0; i<4; i++){
  var teeth = prompt('guess how many teeth I have ' + guestName)

  if(teeth == myTeeth){
    alert('You are Correct')
      console.log('correct ' + teeth)
    break;
  }
  else if (teeth < myTeeth){
    alert('Too low')
      console.log('answer is too low ' + teeth)
  }
  else if (teeth > myTeeth){
    alert('Too high')
      console.log('answer is too high ' + teeth)
  }
  else {
    alert('Must be a number')
      console.log('invalid answer ' + teeth)
  }
}
   alert('The right answer is 32. Better Luck Next Time')

//Jesse helped me with this function

var places = ['Baja Sur', 'Germany', 'South Korea', 'Japan', 'United Kingdom', 'United Emerits'];
function lastQuestion () {
  
  for(var i = 6; i>0; i --){
  
  var answer = prompt ('Guess my top Ten places I like to visit. You will have ' + places.length + ' attempts');
    if (answer == places[0] || answer === places[1] || answer === places[2] || answer === places[3]||answer === places[4]||answer == places[5]){
      alert('awesome place');
    break;
    }
}
alert('Here is my top ' + places.length + ' Places '  + places.toString())
}
lastQuestion ();