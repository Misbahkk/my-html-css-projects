//1 . 
let name = 'misbah'
let frient = 'Maadeha'
console.log( `${name} and ${frient} is a best friend`)

//2 \ -> is ka sath ' " n r likh sakta hn
//escape sequence cracter \ is ka sath laga do to use ek hi character mana jata ha
let x = 'Muska\'n'
console.log(x)

let y = "Misba\nh"
console.log(y)
console.log(y.length)

//3 to upper case
let a = 'misbah yousaf'
console.log(a.toUpperCase())
//4 to lower case
let b = 'MISBAH YOUSAF'
console.log(b.toLowerCase())

//5 slice function use to the break the string
let c = 'Misbah Kaimkhani'
console.log(c.slice(2,9))
console.log(c.slice(4))
//6 trim is property for trim the vaset space
let d = '         Misbah          '
console.log(d)
console.log(d.trim())

//7 relace property to replace the string
let e = 'Misbah yousaf'
console.log(e.replace('yousaf' , 'kaimkhni'))

//8 concat the 2 string mean combine the string
let f = 'Misbah is a good girl'
let g = 'student of sindh university'
let i = ' department'
console.log(f.concat('.She is ' , g , ' Computer Science' ,i))


for(let i=0; i<=f.length-1;i++){
    console.log(f[i])
}
