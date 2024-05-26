button=document.getElementById("incriment-btn");
savebutton=document.getElementById("save-btn");
saveEl=document.getElementById("save-el");

button.onclick=increment
savebutton.onclick=save;
  
couter=0;
function increment(params) {
    couter++;
    update=document.getElementById("count-el").innerText=couter;
    
    
}
function save(params) {
    let num=couter+" - ";
    saveEl.textContent+=num;
    update 
    couter=0;
    update=document.getElementById("count-el").textContent=couter;
} 