const menuData = [
{
    name: "후라이드",
    tags: [
        "명불허전",
        "바삭함",
        "고소함"
    ],
    img : "./img/후라이드.png" 
},
{
    name: "양념",
    tags: [
        "맵단맵단"
    ],
    img : "./img/양념.png" 
},
{
    name: "뿌링클",
    tags: [
        "뿌링뿌링",
        "치즈가루"
    ],
    img : "./img/뿌링클.png" 
},
{
    name: "맛초킹",
    tags: [
        "고추간장",
        "맵짠",
        "주인장최애임",
        "사랑해요맛초킹",
        "맛초킹먹으러갈사람"
    ],
    img : "./img/맛초킹.png" 
},
{
    name: "레드킹",
    tags: [
        "화끈매콤",
        "마늘토핑"
    ],
    img : "./img/레드킹.png" 
},
{
    name: "레드킹 폭립",
    tags: [
        "폭립",
        "신메뉴"
    ],
    img : "./img/레드킹폭립.png" 
},
{
    name: "직화구이",
    tags: [
        "구움",
        "고추장"
    ],
    img : "./img/직화구이.png" 
},
{
    name: "치퐁당",
    tags: [
        "새우",
        "마늘",
        "후레이크"
    ],
    img : "./img/치퐁당.png" 
},
{
    name: "포테킹",
    tags: [
        "감자팡팡"
    ],
    img : "./img/포테킹.png" 
}
];


function createItem(data) {
    
    const item = document.createElement('article');
    const itemName = document.createElement('header');
    const itemTagBox = document.createElement('ul');
    const itemImg = document.createElement('img');
    const itemLike = document.createElement('i');

    item.className = "item";

    itemName.className = "item_name";
    itemName.textContent = data.name;

    itemTagBox.className = "item_tag_box";
    for (const tag of data.tags) {
        const itemTag = document.createElement('li');
        itemTag.className = "item_tag";
        itemTag.textContent = tag;
        itemTagBox.appendChild(itemTag);
    }

    itemImg.src = data.img;
    itemImg.alt = `${data.name} 사진`;

    itemLike.className = "item_like";

    item.appendChild(itemName);
    item.appendChild(itemTagBox);
    item.appendChild(itemImg);
    item.appendChild(itemLike);

    return item;
}


for (const oneData of menuData) {
    const oneItem = createItem(oneData);
    document.getElementById("card_section").appendChild(oneItem);
}



//----------------------------
//html로 메뉴 태그만들어놨고, 이제 그 디자인을 checkbox 이벤트 리슨에 따라 추가하고 삭제하는 로직 구현해야 함 
// 메뉴 태그 추가 
function createMenuTag() {
    const menuTag = document.createElement('li');
    const menuTagName = document.createElement('p');
    const menuTagBtn = document.createElement('button');

    menuTag.className = "menu_tag";
    menuTagName.textContent = "양념";   // target에서 받아오기 
    menuTagBtn = textContent = "X";
    menuTag.appendChild(menuTagName);
    menuTag.appendChild(menuTagBtn);

    return menuTag;
}

// 체크박스 누르면 메뉴 태그 추가 
let tagContainer = [];
const menuBtn = document.querySelector('.menu_check');
menuBtn.onclick = function(e) {
    alert(e.target.textContent);
    tagContainer.push(e.target.textContent);
}


// 체크해서 추가된 태그를 늘 띄우는 코드 

// 왼쪽 메뉴 체크

// 태그의 X 버튼 체크 

