


let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';


/* page */
const page = {
  menu: document.querySelector('.menu__list')
}


/* utils */
//загрузка данных
function loadData(){
  const habbitString = localStorage.getItem('HABBIT_KEY');
  const habbitArray = JSON.parse(habbitString);
  if (Array.isArray(habbitArray)){
    habbits = habbitArray;
  }
}
//сохранение данных
function saveData(){
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}


/* render */
function rerenderMenu(activeHabbitId){
  if (!activeHabbitId){
    return;
  }
  //document.querySelector('.menu__list').innerHTML = '';
  for (const habbit of habbits){
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed){
      //создание
      const element = document.createElement('button');
      element.setAttribute('menu-habbit-id', habbit.id);
      element.classList.add('menu__item');
      element.addEventListener('click', () => rerender(habbit.id));
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}"/>`;
      if (activeHabbit.id === habbit.id){
        element.classList.add('menu__item_active');
      }
      page.menu.appendChild(element);
      continue;
    }
    if (activeHabbit.id === habbit.id){
      existed.classList.add('menu__item_active');
    }
    else{
      existed.classList.remove('menu__item_active');
    }
  }
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbit);
  rerenderMenu(activeHabbit);
}


/* init */
(() => {
  loadData();
  rerender(habbits[0].id);
})();