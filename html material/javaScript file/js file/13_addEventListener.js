// document.getElementById('img1').onmouseover = abc;
// function abc() {
//     document.getElementById('img1').style.filter = 'grayscale(0%)';
    
// }

// document.getElementById('img1').onmouseout = xyz;
// function xyz() {
//     document.getElementById('img1').style.filter = 'grayscale(100%)';
    
// }

// // img2
// document.getElementById('img2').onmouseover = def;
// function def() {
//     document.getElementById('img2').style.filter = 'grayscale(0%)';
    
// }

// document.getElementById('img2').onmouseout = ghi;
// function ghi() {
//     document.getElementById('img2').style.filter = 'grayscale(100%)';
    
// }


// we use this addelementListnere
document.getElementById('img1').addEventListener( 'mouseover' ,
function() { this.style.filter = 'grayscale(0%)'; 
});

document.getElementById('img1').addEventListener( 'mouseout' ,
function() { this.style.filter = 'grayscale(100%)'; 
});

document.getElementById('img2').addEventListener( 'mouseover' ,
function() { this.style.filter = 'grayscale(0%)'; 
});

document.getElementById('img2').addEventListener( 'mouseout' ,
function() { this.style.filter = 'grayscale(100%)'; 
});