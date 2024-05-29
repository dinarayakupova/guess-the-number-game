gsap.from("#container", {
opacity:0,
x:-200,
duration:2
})

const input = document.querySelector('#guess');
const button = document.querySelector('#btn'); 
const answer = Math.floor(Math.random()*20) + 1;

input.addEventListener("keypress", function(e){
    if (e.key === 'Enter') 
    play();

}
)
button.addEventListener("click", play);

function play() {
      //1
    const userNumber = document.querySelector('#guess').value;
     //2
   if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter the number from 1 to 20!',
      })
   }

   else if (isNaN(userNumber)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'It is not a number!',
      })
   }

   else {
    if (userNumber < answer) {
        Swal.fire('Try higher number',
        'Computer is winning...')
    }
    else if (userNumber > answer) {
        Swal.fire("Try lower number",
        'Computer is winning...');
    }
    else {
        Swal.fire({
            title: 'Congrats!',
            text: 'You beat the computer',
            imageUrl: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Victory',
          })
    }
   }

}