// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
var index = 0;
var left = 0; var right = 0;
// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

var fruits = JSON.parse(fruitsJSON);
/*** ОТОБРАЖЕНИЕ ***/
ul=document.createElement('ul');
ul.style.position = "absolute";
ul.style.top = "20px";
ul.style.left = "300px";
ul.style.fontSize = "20px";
document.body.append(ul);
var li = document.createElement('li');
var newText = document.createTextNode("Список фруктов");
li.appendChild(newText);
ul.appendChild(li);
// отрисовка карточек
const display = () => {
  //alert('display');
   for (let i = 0; i < fruits.length; i++) {
     // TODO: формируем новый элемент <li> при помощи document.createElement,
     // и добавляем в конец списка fruitsList при помощи document.appendChi
     let index =i;
     fruits['index'] = i;
     //alert(fruits['index']);
     var newItem = document.createElement("li");
     var newText = document.createTextNode(fruits[i].kind);
     var newWeight =document.createTextNode(fruits[i].weight);
     var newColor = document.createTextNode(fruits[i].color);
     var newIndex = document.createTextNode(fruits['index']);   
     newItem.textContent = 'index:' + newIndex.textContent + ' ' + 'kind:'+ newText.textContent + ' ' + 
     'color:' + newColor.textContent + ' ' + 'weight:' + newWeight.textContent;
   let clr = "";
     switch (newColor.textContent){
      case 'фиолетовый':
        clr ='#8b00ff';
        break;
      case 'зеленый':
        clr = '#84cd1b';
        break;
      case 'розово-красный':
        clr = '#dc143c';
        break;
      case 'желтый':
        clr = '#ffd800';
        break;
      case 'светло-коричневый':
        clr = '#cd853f';
        break;
      case 'синий':
        clr =  '#0000ff';
        break; 
        default:
          clr =  '#00ffff';
          break;
     }
     //newItem.style.backgroundColor = clr;
     newItem.style.border = '10px solid' + clr;
    // newItem.style.top = '50px';
     ul.appendChild(newItem);
   
   }
   return ul;
   }
 
/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
//const shuffleFruits = () => {
//  let result = [];
document.getElementById('shuffle').addEventListener('click', function(){
  let result = [];
   while (fruits.length > 0) {
     let random = getRandomInt(0, fruits.length - 1);
     let elem = fruits.splice(random, 1)[0];
     result.push(elem);
    // alert(elem.kind);
   }
   fruits = result;
   ul=document.createElement('ul');
   ul.style.position = "absolute";
   ul.style.top = "280px";
   ul.style.left = "300px";
   ul.style.fontSize = "20px";
  document.body.append(ul);
  var li = document.createElement('li');
  var newText = document.createTextNode("Перемешивание");
  li.appendChild(newText);
  ul.appendChild(li);
  display();
})
 


/*shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});*/
  
  /** ФИЛЬТРАЦИЯ*/

// фильтрация массива
const filterFruits = () => {
  var minWeight =  document.getElementsByClassName('minweight__input');
  var maxWeight = document.getElementsByClassName('maxweight__input');
  let res=[];
 res = fruits.filter((item) => (item.weight > minWeight[0].value && item.weight < maxWeight[0].value));
  fruits = res;
  }


filterButton.addEventListener('click', () => {
  filterFruits();
  ul=document.createElement('ul');
  ul.style.position = "absolute";
  ul.style.top = "540px";
  ul.style.left = "300px";
  ul.style.fontSize = "20px";
 document.body.append(ul);
 var li = document.createElement('li');
  var newText = document.createTextNode("Фильтрация");
  li.appendChild(newText);
  ul.appendChild(li);
  display();
  fruits = JSON.parse(fruitsJSON);
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
 // alert('a' + " " + a);
  let comp1=0; let comp2=0;
  switch (a){
    case 'фиолетовый':
      comp1 =11;
      break;
    case 'зеленый':
      comp1 = 13;
      break;
    case 'розово-красный':
      comp1 = 16;
      break;
    case 'желтый':
      comp1 = 14;
      break;
    case 'светло-коричневый':
      comp1 = 10;
      break;
      default:
        comp2 =12;
        break;
  }
  switch (b){
    case 'фиолетовый':
      comp2 =11;
      break;
    case 'зеленый':
      comp2 = 13;
      break;
    case 'розово-красный':
      comp2 = 16;
      break;
    case 'желтый':
      comp2 = 14;
      break;
    case 'светло-коричневый':
      comp2 = 10;
      break;
      default:
        comp2 = 12;
        break;
  }
 // alert(comp1 + "" +comp2);
  if(comp1 > comp2){return true}
  else{return false}
};
function partition(arr, left, right) {
  var pivot = arr[Math.floor((right + left) / 2)].color,
      i = left;
      j = right;
  while (i <= j) {
      while (comparationColor(arr[i].color,pivot)) {       //(items[i] < pivot)
          i++;
      }
      while (comparationColor(arr[i].color,pivot)) {                        //(items[j] > pivot)
          j--;
      }
      if (i <= j) {
          swap(arr, i, j);
          i++;
          j--;
      }
  }
  return i;
}

function swap(arr, firstIndex, secondIndex){
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

const sortAPI = {
  bubbleSort(arr, comparationColor) {
    // TODO: допишите функцию сортировки пузырьком
   // alert(arr.length);
    for (let j = arr.length;j>0, j=j-1;) {
    //  alert(arr[j].color + "  " + j);
      for (let i = 0; i < j; i++) {
       // let com1= fruits[i].color.textContent;
       let com1= arr[i].color;
        let com2 =arr[i + 1].color; 
      //  alert(comparationColor (com1,com2));                                           
        if (comparationColor (com1,com2)){
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
  }
}
//alert(arr[j].color + "  " + j);
    }
    fruits = arr.reverse();
    ul=document.createElement('ul');
   ul.style.position = "absolute";
   ul.style.top = "740px";
   ul.style.left = "300px";
   ul.style.fontSize = "20px";
   document.body.append(ul);
   var li = document.createElement('li');
   var newText = document.createTextNode("Сортировка пузырьком");
   li.appendChild(newText);
   ul.appendChild(li);
   //display();
  },

  quickSort(arr, comparationColor, left, right) {
    // TODO: допишите функцию быстрой сортировки
   // var index;
    if(arr.length > 1){
      left = typeof left != "number"? 0: left;
      right = typeof right != "number"? arr.length - 1: right;
      index = partition(arr, left, right);
     // alert('index=' + index + ' ' + left);
      if (left < index - 1) {
        quickSort(arr, comparationColor,left, index - 1);
    }
    if (index < right) {
        quickSort(arr,comparationColor, index, right);
    }
}
ul=document.createElement('ul');
ul.style.position = "absolute";
 ul.style.top = "990px";
ul.style.left = "300px";
ul.style.fontSize = "20px";
ul.scrollTop=ul.scrollHeigjht;
document.body.append(ul);
var li = document.createElement('li');
var newText = document.createTextNode("Сортировка быстрая");
li.appendChild(newText);
ul.appendChild(li)
return arr;
  },    

  // выполняет сортировку и производит замер времени

  startSort (sort, arr, comparationColor) {
    fruits = JSON.parse(fruitsJSON);
    const start = new Date().getTime();
    sort(arr, comparationColor,left,right);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
    sortTimeLabel.textContent = sortTime;
    //display();
    
    
  },
}
// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  if(sortKind == 'bubbleSort'){sortKind='quickSort';}
  else{sortKind ='bubbleSort';}
  sortKindLabel.textContent = sortKind;
  sortTimeLabel.textContent = "";
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  //alert(sortKind);
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
})

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  fruits.push({
  kind: kindInput.value,
  color: colorInput.value,
  weight: weightInput.value,
});
  display(); 
 });
 display();
