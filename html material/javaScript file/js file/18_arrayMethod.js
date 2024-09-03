let name1 = ['Misbah ' , 'Yousaf ', 'maadeha ' , 'Radia '];

/* LENGTH MALOM KRNA KA TAREKA
console.log(name1.length);*/

/*LAST MA ADD KRNA KA TAREKA 
let r =name1.push('Laiba');
console.log(r ,name1);*/

/* AGR START MA VALUE ADD KRNA HO TO uNSHIFT USE KRNA HOGA
name1.unshift("radia");
console.log(name1);*/


/* AGR LAST VALE KO HATANA HO TO (POP) USE KAREN GN
name1.pop();
console.log(name1);*/


/*AGR SB SA PHALA ELEMENT HATANA HATO SHIFT USE KARENGN
name1.shift();
console.log(name1);*/


/* agr kahen bich ma sa hatana hato splice use krta hn 
name1.splice(1,2);
console.log(name1);
let num = [22 , 33, 44 , 55, 66 , 77 ,88]
// 2, 3 -> 2 sa 3 num delete ho jai ga phr 3 add ho jai ga
num .splice(2 ,3, 111 ,222, 333)
console.log(num)*/


/*SLICE NEW ARRY CREATE KARE GA 
let num = [22 , 33, 44 , 55, 66 , 77 ,88]
num.slice(2,5)
console.log(num) --> ese krna sa ya purana array hi chala ga
let newnum = num.slice(2,5)
console.log(newnum) --> ese ab new array ban gaya */

/*ARRAY KO BLANK KESE KRNA HA 
name1.length = 0;
console.log(name1);*/

/* KESE BI ELEMENT KI POSITION CHEACK KESE KRTA HAWN
let position = name1.indexOf('maadeha ');
console.log(position);*/


/* SENTENCE KO ARRAY KESE BANAI GN?

let text = "My Name Is Misbah Yousaf";
let new1 = text.split(' ');
console.log(new1);*/


/* JOINE array ko sentence banta ha
let arraytext = name1.join('-');
console.log(arraytext);*/


/* DO ARRAY KO SATH JOIN KRNA
let name2 = ["My ","Name ","Is ", "Misbah ", "Yousaf"];
let newname = name1.concat(name2);
console.log(newname);*/

/*MULTIDIMENTIONAL ARRRAY ARRY MA ARRY KO KESE DEFINE KRTA HAWN

let shope= [['chemistry ', '3 month'] ,['bio' , '4 moth'] , ['physic ','5 month']];
console.log(shope);*/