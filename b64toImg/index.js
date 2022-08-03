let src = document.querySelector('#data');
let img = document.querySelector('img');
src.addEventListener('input',(e)=>{
    img.src = `data:image/png;base64,${e.target.value}`;
})