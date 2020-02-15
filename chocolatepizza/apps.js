var userInput=[];

function Chocolate(one, two, three, four, five, six, seven, eight,nine,ten, eleven, twelve )
{
    this.one= one;
    this.two= two;
    this.three= three;
    this.four= four;
    this.five= five;
    this.six= six;
    this.seven= seven;
    this.eight= eight;
    this.nine= nine;
    this.ten= ten;
    this.ten= eleven;
    this.ten= twelve;
}


function handleform(event)
{
    event.preventDefault();
    var one = event.target.one.value;
    var two = event.target.two.value;
    var three = event.target.three.value;
    var four = event.target.four.value;
    var five = event.target.five.value;
    var six = event.target.six.value;
    var seven = event.target.seven.value;
    var eight = event.target.eight.value;
    var nine = event.target.nine.value;
    var ten = event.target.ten.value;
    var eleven = event.target.eleven.value;
    var twelve = event.target.twelve.value;

    var chocolate= new Chocolate (one, two, three, four, five, six, seven, eight,nine,ten, eleven, twelve )

    var radioArray= [
        event.target.one.checked, 
        event.target.two.checked, 
        event.target.three.checked, 
        event.target.four.checked, 
        event.target.five.checked, 
        event.target.six.checked, 
        event.target.seven.checked,
        event.target.eight.checked,
        event.target.nine.checked,
        event.target.ten.checked,
        event.target.eleven.checked,
        event.target.twelve.checked
    ]

    // console.log('CHECKED?', radioArray[0]);
        for (var i=0; i<radioArray.length; i++)
        {
            if(radioArray[i] == true)
            {
             ;
                userInput.push(chocolate);
            
                 console.log(userInput);
             }
       
        
        }

  
       
    
    

}

var myData=document.getElementById('form');
myData.addEventListener('submit', handleform);

