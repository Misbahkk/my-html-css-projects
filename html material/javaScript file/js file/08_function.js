function sum(x , y) {
    document.write(x+y + '<br>');
    document.write(x-y + '<br>');
};
sum(4,6);
// sum(10,5);
// sum(50,30);
document.write("<br> <br>  Next function for return value  <br> <br> ");


//return value 
function marksSum(english , math , cs , it, mba) {
    var a = english+math+cs+it+mba;
    return a;
}

var b = marksSum(60,70,80,90,50);
document.write('Total markx is - ' + b);

document.write('<br>');

function total(t) {
    var c = t/500*100;
    return c;
}
var d = total(b);
document.write('persantange is - ' + d + '%');
