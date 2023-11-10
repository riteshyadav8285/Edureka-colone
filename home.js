let count=0;
function showimg(num){
    let slider=document.getElementsByClassName('slider');
    for(let y of slider){
        y.style.display='none'
    }
    if(num==slider.length){
        num=0;
        count=0;
    }
    if(num<0){
        count=slider.length-1
        num=slider.length-1
    }
    console.log(slider)
    slider[num].style.display="block"
    
}

function controller(x){
    count=count+x;
    showimg(count)
}

// container box
var contbox=document.querySelector(".container-box")
console.log(contbox)

contbox.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    contbox.scrollLeft +=evt.deltaY


})