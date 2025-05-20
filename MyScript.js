
function changebg(){
    if(window.scrollY > window.innerHeight/2){
        document.body.classList.add('bg-color');
    }

    else if(window.scrollY > window.innerHeight/3){
        document.body.classList.remove('bg-color');
        document.body.classList.add('bg-color-1');
    }

    else
    {
        document.body.classList.remove('bg-color');
        document.body.classList.remove('bg-color-1');
    }
}

window.addEventListener('scroll',changebg)