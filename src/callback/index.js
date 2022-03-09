function sum(a ,b) {
    return a+b;
}

function calculate(a, b, callback){
    return callback(a, b);
}

console.log(calculate(6,2,sum));
// ---------------------------------------------------
function date(callback){
    console.log('Esta es la primera fecha que se imprime en pantalla -> '+new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate); 