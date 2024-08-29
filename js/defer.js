
console.log('defer')

var x;
var Var;
var newVar;
var $var;
var _var;

// var new var
// var badname
// var const
// var bad_name
// var .bad



function getAge() {
    const year = new Date().getFullYear()

    const userName = prompt("inser your name");
    const userYear = prompt(`what is your year of birth`);
    
    if(!userName){
        alert('try once more');
        getAge()
    }else{
       alert(`hello ${userName} your age is ${year - userYear} `)
    }

    const squareWidth = prompt('whats square width?')

    alert(squareWidth * squareWidth)
}

getAge()


