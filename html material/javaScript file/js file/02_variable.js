/* there are 3 variable in js
1.var == dubara sa declare kr skta hawn  assign bi kr skta hawn
var jo ha vo ES6 code ma paya jata ha var ki vaja sa kxh bug ata hn code ma jis ke vja sa aj kal var use nh hota
ES6 == ECMAScript = new javaScript..
2.let ==declare nh kr skta lkn assign kr skta hwn 
3.const == const un ka liya use hota ha ka ham ko jo vlue chnge nh kri this is a constant value in javascrip

*/
// when we use var in block then it is not dolobal it chnge in declaration this is problem
var b = 'misbah';
{
    var b = 'this'
    document.write(b);
}
document.write(b);
document.write('<br>_______________________________________________________________________<br><br>');
//when we use let in block then chkek whate happen

let a = 'misbah';
{
    let a = 'this'
    document.write(a);
}
document.write(a);

document.write('<br>_______________________________________________________________________<br><br>')
var myname = 'Misbah Yousaf ';



//dubara sa declare kr sakte han
var myname = 'kaim khani';
document.write('<br> <br>');
//dubara sa assign
myname= ' khani';
document.write(myname);
document.write('<br>');
document.write(typeof myname);
document.write('<br> <br>');
document.write('<br>_______________________________________________________________________<br><br>')


var x= true;
document.write(x);
document.write(' <br>');
document.write(typeof x);
document.write('<br> <br>');
document.write('<br>_______________________________________________________________________<br><br>')

var y= 50;
document.write(y);
document.write(' <br>');
document.write(typeof y);
document.write('<br> <br>');

document.write('<br>_______________________________________________________________________<br><br>')

var z= ["apple","mango","banana"];
document.write(z);
document.write('<br>');
document.write(typeof z);
document.write('<br> <br>');
document.write('<br>_______________________________________________________________________<br><br>')



var j;
document.write(j);
document.write('<br>');
document.write(typeof j);
document.write('<br> <br>');
document.write('<br>_______________________________________________________________________<br><br>')




let name1 = 'maadeha';
// dubara declaew kna sa error ai ga
//let name1 = 'asdhbjjh';
name1 = 'misbah'
document.write(name1);document.write('<br> <br>');
document.write(typeof name1);
document.write('<br> <br>');
const mi = 'agbkunm';
document.write(mi);

//nn bb ss u
// null number symbol string bullon bigint undefinde