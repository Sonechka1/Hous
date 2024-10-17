const tabsHeader = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]')
tabsHeader.forEach(function(item){
    item.addEventListener('click' , function(){
        
        contentBoxes.forEach(function(item){
            item.classList.add('hidden');
        })

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');


    })
})
tabsHeader.forEach(function(item){
    item.addEventListener('click' , function(){
        tabsHeader.forEach(function(item){
            item.classList.remove('active')
        })
        
        item.classList.add('active')
    })
})


const OpenMenu = document.querySelector('.open-menu');
const MobileOverlay = document.querySelector('.mobile-overlay');
const CloseMenu = document.querySelector('.close-menu');
OpenMenu.addEventListener('click' , function(){
    MobileOverlay.classList.remove('hidden');
})

CloseMenu.addEventListener('click' , function(){
    MobileOverlay.classList.add('hidden');
})