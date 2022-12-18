const serviceCards = document.querySelectorAll('.card');

let ids=0;

serviceCards.forEach(card=>card.id=ids++);

serviceCards.forEach(card=>{
    card.addEventListener('click',()=>{
        toggleCard(card);
        closeOpenCards(card.id);
    });
});

function closeOpenCards(currentId){
    serviceCards.forEach(card=>{
        if(card.id!=currentId){
            if(card.children[0].classList.contains('hidden')){
                toggleCard(card);
            }
        }
    });
}

function toggleCard(card){
    card.children[0].classList.toggle('hidden');
    card.children[1].classList.toggle('hidden');
    card.children[2].classList.toggle('hidden');
    card.children[2].classList.toggle('flex');
    card.classList.toggle('hover:scale-105');
}