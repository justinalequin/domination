function strikeThrough(){
    const li = document.querySelector('li');
    li.style.textDecoration = 'line-through';

}

strikeThrough();

function setImage(id, url){
document.querySelector(id).src = url;
}

setImage('#image-1', 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png');
setImage('#image-2', 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png');
setImage('#image-3', 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png');

function removeFirstLi(){
    const removeFirst = document.querySelector('#arguments li')
    removeFirst.remove();

}
removeFirstLi();
removeFirstLi();

function changeSize(id, size){
    const changeSize = document.querySelector(id);
    changeSize.style.fontSize = size;
}

changeSize('#thing-2', '34px');

function appArg(element){
const args = document.querySelector('#arguments');
args.appendChild(element);
}

const img = document.createElement('img')
img.src = 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png';

appArg(img);

function modifyHeight(imageElement){
    imageElement.style.height = '30px';
}
const imgage1 = document.querySelector('#image-1');

modifyHeight(imgage1);

function invisible(element){
    element.className = 'invisible';
}

const h1 = document.querySelector('h1');
   invisible(h1);

   function newLi(fill){
       const li = document.createElement('li');
       li.innerText = fill;
       return li;
   }

   const test = newLi('I am putting words in this very spot.');
   appArg(test);

   function header(size, filler){
       const tag = 'h' + size;
       const header = document.createElement(tag);
       header.innerText = filler;
       return header
   }

   const head = header(7, 'It\'s the moment we\'ve all been waiting for!');
   appArg(head);