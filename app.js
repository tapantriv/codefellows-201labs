
var guestName = prompt ('Hi there friend. What is your Name!');
  alert('Nice to meet you ' + guestName);
    console.log('guest name is ' + guestName);
  
//this is the blind question 1
var blind = prompt('So ' + guestName + ' are you blind?');

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
  var hungry = prompt('Next question ' + guestName + ' Are you Hungry?')

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
  var happy = prompt('third question ' + guestName + ' Are you Happy?')

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
  var sleep = prompt('eve of questioning ' + guestName + ' Are you Sleep?')

    if(sleep.toLowerCase() === 'yes'||sleep.toLowerCase() === 'y'){
      alert('You need to catch some zzzzz ' + guestName + ' take a nap')
        console.log('Answer is ' + sleep)
      }
    else if(sleep.toLowerCase() === 'no'||sleep.toLowerCase() === 'n'){
      alert('Good job rest is important ' + guestName + ' bright eyes')
        console.log('Answer is ' + sleep)
          }
    else{
      alert('Sorry not a valid answer')
        console.log('Answer is ' + sleep)
            }

//this is the ready question 5 thinking about using the switch function
  var ready = prompt('You have patients...last question ' + guestName + ' Are you Ready?')

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
// Tapankumar Trivedi helped me on the fist block of if else if else statements

