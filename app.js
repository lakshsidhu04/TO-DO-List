let btn=document.querySelector('.btn');
let box=document.querySelector('.box');
let text=document.querySelector('.text');

let list=document.querySelector('.list');


let h=350;
btn.addEventListener('click',()=>{
    let input=text.value;
    text.value="";
    if(input==="")
        alert('enter a task first');
    
    else{
        // box.setAttribute("style",`height:${h+30}px`);
        // h=h+30;
        let curr=document.createElement('li');
        curr.innerHTML=input;
        list.appendChild(curr);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        curr.appendChild(span);
        saveData();
    }

});

window.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        let input=text.value;
    text.value="";
    if(input==="")
        alert('enter a task first');
    
    else{
        // box.setAttribute("style",`height:${h+30}px`);
        // h=h+30;
        let curr=document.createElement('li');
        curr.innerHTML=input;
        list.appendChild(curr);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        curr.appendChild(span);
        saveData();
    }
    }
})


list.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        // box.setAttribute("style",`height:${h-50}px`);
        // h=h-50;
        saveData();
    }
})


function saveData(){
    localStorage.setItem('data',list.innerHTML);
}

function loadData(){
    list.innerHTML=localStorage.getItem('data');
}

loadData();



