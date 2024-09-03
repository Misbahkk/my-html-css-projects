// Loop In Array Servail Method To Apply for Loop In Array

let arr1 = [2, 3, 4, 5, 6, 7 ,9]
/* 1.. simple method 
 for(let i = 0; i<arr1.length ; i++){
    console.log(arr1[i])
 }*/

 /* 2.. METHOD USE FOREACH --> this loop use with function 
  arr1.forEach((element)=>{
       console.log(element*element)
 })
 //--> ya new array nh banata */

 /* 3.. ARRAY.FROM use hota ha html documentry ko array bana ka liya 
 let name = 'Misbah'
 let arr = Array.from(name)
 console.log(arr)*/

 /* 4.. FOR OF LOOP ARRAY KA SARY ELEMENT KO PRINT KR DEGA 
 for(let item of arr1){
    console.log(item)
 }*/

 /* 4.. FOR IN LOOP ARRAY KE INDEX KO LATA HA 
 for(let item in arr1){
    console.log(item)
 }*/

 //MAP FILTER REDUSE ARRY KO MODFIER NH KRTA EK NEW ARRY BANAKA DETA HAN

 /* 5.. MAP LOOP new array bana ta ha

 let a = arr1.map((value ,index , array)=>{ //--> ya ham for each ka sath bi kr sakta hn
       console.log(value ,index,array)
       return value+1;
 })
  console.log(a) //agr a ko print karen gn to ek new arry ban ka ajai ga
  console.log(arr1) //is ko karen gntovoi purana arry ai ga*/

  /* 6.. FILTER --> ya bi new array bana ka dega  
  let arr2 = [15 , 20 , 40 ,55, 2, 7 , 8, ]
  let a =arr2.filter((value)=>{
   return value<20;
  })
  console.log(a) // new array ban rha ha yhn pa bi*/


  /* 7.. REDUSE..---> ya ek value ko return krta han baki dono array ko return krta hn  
   let ar3 =[15 , 20 , 40 ,55, 2, 7 , 8,]
   const reduse_fun = (h1 , h2)=>{
    return h1+ h2 // --> yhn pa ham koi bi operation kr ka ek value nikalta han
   }
   let newarr3 = ar3.reduce(reduse_fun)
   console.log(newarr3)*/