// on click change
// var change=document.querySelectorAll(".left-content-Content .left-content-Content-text");
// console.log(change)
// change.forEach((ele)=>{
//     ele.addEventListener("click",()=>{
//         change.forEach(newbtn=>
//         newbtn.classList.remove("active"));
//        ele.classList.add("active")
// })
// })
// console.log(change)

var flag=0

function courseContentShow(){
    var courseContent=document.getElementById("course-content")
    if(flag==0){
        courseContent.style.display="block"
        flag=1
    }
    else{
        courseContent.style.display="none"
        flag=0
    }
  
}

