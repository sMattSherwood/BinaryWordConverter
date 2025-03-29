// this will select the button to make the text visible
// button for event listener
const makeVisible = document.getElementById('explanationButton');
// this will toggle visiblity
const info = document.getElementById('info');
// function to make the text body visible
makeVisible.addEventListener('click', ()=>{
    info.classList.toggle('fadeIn');
    
    console.log('button pressed')
});