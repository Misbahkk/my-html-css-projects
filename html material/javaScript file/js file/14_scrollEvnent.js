// window.addEventListener('scroll' , function () {
//   console.log('Scrolling');
// });

window.addEventListener('wheel' , function (event) {
    if (event.deltaY < 0) {
      console.log("Scrolling Up...")
    }
    else if (event.deltaY > 0){
  console.log('Scrolling Down....')
    }
});