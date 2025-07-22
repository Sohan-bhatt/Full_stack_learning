function changeShapeRandomly(elem) {
  const shapes = [
    "0%", "25%", "50%", "50% 0% 50% 0%", "0% 50% 0% 50%"
  ];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  elem.style.borderRadius = randomShape;
}


function border11(elem){
    const l="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)color+=l[Math.floor(Math.random()*16)];
    elem.style.borderColor=color;
     elem.style.borderWidth = "2px";      
  elem.style.borderStyle = "dashed";
}
let activeimg=null;
function add(){
    document.querySelectorAll(".images img").forEach((img) => {
        let count=0;
        img.addEventListener('click', (event) => {
            event.stopPropagation();
            if(activeimg && activeimg!==img){
                activeimg.classList.remove("click-effect");
            
            }
            img.classList.add("click-effect"); 
            activeimg=img;
         }); 
        img.addEventListener('dblclick', (e) => {
                if(activeimg===img)activeimg.classList.remove("click-effect"),activeimg=null;
                e.stopPropagation();
            
             });
    });
    document.getElementById("bt1").addEventListener('click',()=>{
            if(activeimg){changeShapeRandomly(activeimg);}
            });
    
    document.getElementById("bt2").addEventListener('click',()=>{
        if(activeimg){border11(activeimg);}
    });
}
add();

