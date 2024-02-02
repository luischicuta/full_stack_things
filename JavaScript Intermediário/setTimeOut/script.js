

let modal = ()=>{
    let square = document.querySelector('.modal');

    square.style.display = 'block';
    square.style.opacity = 0;
    setTimeout(()=>{
        square.style.opacity = 0.5;
        square.style.opacity = 1;
    }, 600);
}