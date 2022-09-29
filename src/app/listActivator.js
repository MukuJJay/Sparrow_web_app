export default function listActivator(items){
    items.forEach(item =>{
        item.addEventListener("click", ()=>{
            for(let i=0; i<items.length; i++){
                items[i].classList.remove("active");
            }
            item.classList.add("active");
        });
    });
    
}