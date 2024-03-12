let lists = document.querySelectorAll("#item");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");

for( item of lists ){
    item.addEventListener("dragstart", function(e){
       let selected = e.target;  // it target the selected one

       rightBox.addEventListener("dragover", function(e){ // the right box can grab the dragitem 
        e.preventDefault();
       });
       rightBox.addEventListener("drop", function(e){   // it this code it can append the item on itself
        rightBox.appendChild(selected);
        selected = null ;
       });
       leftBox.addEventListener("dragover", function(e){  // same function is aplied for left box 
        e.preventDefault();
       });

       leftBox.addEventListener("drop", function(e){
        leftBox.appendChild(selected);
        selected = null ;
       });
    }) 
}
