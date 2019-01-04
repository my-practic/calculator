let numbers = document.querySelectorAll('button[type=\'button\']');
let screen = document.querySelector('.calculator-screen');
function calcScreen(){
    
numbers.forEach(function(number){ //forEach loop through what you specified it to\
    number.addEventListener('click', function(e){
        
        //        return screen.value;
        if(screen.value == '' && e.target.value == '*'){
            console.log(e.target.value);
        
    }else if(screen.value == '' && e.target.value == '/'){
            console.log(e.target.value);
        
    }else if(screen.value == '' && e.target.value == '+'){
            console.log(e.target.value);
        
    }
        
        else screen.value += e.target.value; //this will append the numbers  to the screen

})
})
}
calcScreen();

function evaluate(){
    let val = eval(screen.value);
    console.log(val);
    screen.value = val;
    
}
const equal = document.querySelector('.equal-sign');

equal.addEventListener('click', evaluate);

const clear = document.querySelector('.all-clear');
clear.addEventListener('click', function(e){
//screen.value = '';
    let del = screen.value.substring(0, screen.value.length-1);
    screen.value = del;
});
                       










//
//let animals = ['dog', 'chicken', 'cat', 'goat'];
//
//animals.forEach(function(animal){
//    console.log(animal);
//})