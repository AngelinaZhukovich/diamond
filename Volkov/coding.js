function addItem() {
  var newItem = document.createElement('div'); // создание нового тега div
  newItem.innerHTML = document.getElementById("box").value; // присваивание innerHTML ссылочного значения(нового тега div)
  newItem.onclick = removeItem; // новому div вешается функция 
  document.getElementById("list").appendChild(newItem); //добавление нового тега div в тег div
  saveList();//вызов функции сохранения списка
}

function removeItem() {
  document.getElementById("list").removeChild(this);
  saveList();
}

function saveList() {
  localStorage.storedList = document.getElementById("list").innerHTML; //функция сохранения списка
}

function loadList() {
  document.getElementById("list").innerHTML = localStorage.storedList; //функция загрузки списка
}

if (localStorage.storedList) {
  loadList(); //вызов функции, загружающей список
}
