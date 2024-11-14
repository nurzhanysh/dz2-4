const hideTabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items')


const hideTabContent = () => {
    hideTabContentBlocks.forEach(block => {
        block.style.display = 'none';
    });
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active'); // исправлено classist на classList
    });
};

const showTabContent = (id = 0) => {
    hideTabContentBlocks[id].style.display = 'block'; // исправлено tabContentBlocks на hideTabContentBlocks
    tabs[id].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent();


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex)=>{
           if(event.target===tab) {
            hideTabContent()
            showTabContent(tabIndex)
           }
        })
    }
}