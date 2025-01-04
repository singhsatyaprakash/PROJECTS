let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.innerText=="AC"){
            string="";
            input.value="";
        }
        else if(button.innerText=="DEL"){
            string=string.slice(0,-1);
            input.value=string;
        }
        else if(button.innerText=="="){
            string=eval(string);
            input.value=string;
        }
        else{
            string+=button.innerText;
            input.value=string;
        }
    });
    
});