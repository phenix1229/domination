function setUrl(idStr, urlStr){
    document.querySelector('#'+idStr).src = urlStr;
}

setUrl('image-1', 'https://www.pktfuel.com/wp-content/uploads/2017/10/Here-I-am-Lord-send-me-%E2%80%93-Part-5-on-Isaiah-6-8.jpg');

setUrl('image-2', 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/64/98/ba/6498bacf-011a-5f93-740a-3f6ceb3665e5/0000768681145.jpg/268x0w.jpg');

setUrl('image-3', 'https://www.mencap.org.uk/sites/default/files/styles/hero_620w_responsive_utility_/public/2016-10/Joe_1600X700_V3.png.jpg?itok=M7elZTP-');


function strikeText(){
    const ul = document.querySelector('#arguments');
    ul.querySelector('li:first-child').style.textDecorationLine = 'line-through';
}

strikeText()


function removeLi() {
    const ul = document.querySelector('#arguments');
    ul.querySelector('li:last-child').remove();
}

removeLi();
removeLi();

function appendToUl(element){
    const ul = document.querySelector('#arguments');
    const newChild = document.querySelector(element);
    ul.appendChild(newChild)
}

appendToUl('#image-2');

function setImgHeight(img){
    document.querySelector(img).style.height = '30px';
}

setImgHeight('#image-1');

function setInvisible(element){
    document.querySelector(element).setAttribute ('class', 'invisible');
}

setInvisible('ol');

function createHeader(headerNum, innerTxt){
    newHeader = document.createElement('h' + headerNum);
    newHeader.setAttribute('class', 'headR');
    newHeader.innerText = innerTxt;
    return document.querySelector('body').appendChild(newHeader);
}

const newH = createHeader('1', 'test header')

appendToUl('.headR');

function newLi(liText){
const newItem = document.createElement('li');
    newItem.innerText = liText;
    newItem.setAttribute('class', 'newLItem')
    return document.querySelector('body').appendChild(newItem);
}

const testLi = newLi('This is a test of newLi!');
appendToUl('.newLItem');