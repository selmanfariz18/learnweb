let count=0;
 
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const a=e.currentTarget.classList;
        if (a.contains("decrease")) {
            count--;
        }else if (a.contains("increase")){
            count++;
        }else {
            count=0;
        }
        if (count > 0) {
            value.style.color="green";
        }
        if (count==0) {
            value.style.color="#222";
        }
        if (count<0) {
            value.style.color="red";
        }
        value.textContent=count;
    });
});
     