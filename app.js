
 const backpack=document.querySelector('.holder-backpack');
const shovel=document.querySelector('.holder-shovel');
const gear=document.querySelector('.holder-gear');

const selImage=document.querySelectorAll('.select-image');

function activateImage(holder) {
    selImage.forEach(sel => sel.classList.remove('active'));
    const sel=holder.querySelector('.select-image');
    if (sel){
        sel.classList.add('active');
        
    } 
}

function deactivateImage(){
    selImage.forEach(sel => sel.classList.remove('active'));
}


backpack.addEventListener('mouseover',()=> {
    activateImage(backpack);
} );
shovel.addEventListener('mouseover',()=> {
    
     activateImage(shovel)});
gear.addEventListener('mouseover',()=> {
    
     activateImage(gear)});

backpack.addEventListener('mouseout', deactivateImage);
shovel.addEventListener('mouseout', deactivateImage);
gear.addEventListener('mouseout', deactivateImage);

window.addEventListener('load',()=>{
    activateImage(backpack);
});
 



