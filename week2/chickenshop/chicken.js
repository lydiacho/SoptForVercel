const menuData = [
{
    name: "후라이드",
    tags: [
        "명불허전",
        "바삭함",
        "고소함"
    ],
    img : "./img/후라이드.png",
    value : "전체"
},
{
    name: "양념",
    tags: [
        "맵단맵단"
    ],
    img : "./img/양념.png" ,
    value : "양념"
},
{
    name: "뿌링클",
    tags: [
        "뿌링뿌링",
        "치즈가루"
    ],
    img : "./img/뿌링클.png",
    value : "양념"
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
    img : "./img/맛초킹.png" ,
    value : "치킨킹"
},
{
    name: "레드킹",
    tags: [
        "화끈매콤",
        "마늘토핑"
    ],
    img : "./img/레드킹.png",
    value : "치킨킹"
},
{
    name: "레드킹 폭립",
    tags: [
        "폭립",
        "신메뉴"
    ],
    img : "./img/레드킹폭립.png" ,
    value : "치킨킹"
},
{
    name: "직화구이",
    tags: [
        "구움",
        "고추장"
    ],
    img : "./img/직화구이.png",
    value : "구이"
},
{
    name: "치퐁당",
    tags: [
        "새우",
        "마늘",
        "후레이크"
    ],
    img : "./img/치퐁당.png",
    value : "양념"
},
{
    name: "포테킹",
    tags: [
        "감자팡팡"
    ],
    img : "./img/포테킹.png",
    value : "치킨킹"
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


//화면 띄우는 함수
function refresh() {
    document.getElementById("card_section").innerHTML = "";
    for (const oneData of menuData) {
        if (document.getElementById("전체").checked || document.getElementById(oneData.value).checked) {
            const oneItem = createItem(oneData);
            document.getElementById("card_section").appendChild(oneItem);
        }
    }
}


// 메뉴 태그 추가 
function createMenuTag(tagValue) {
    const menuTag = document.createElement('li');
    const menuTagName = document.createElement('p');
    const menuTagBtn = document.createElement('button');

    menuTag.className = "menu_tag";
    menuTag.id = `${tagValue}_checked`;
    menuTagName.textContent = tagValue;
    menuTagBtn.className = "menu_x";   
    menuTagBtn.textContent = "X";
    menuTag.appendChild(menuTagName);
    menuTag.appendChild(menuTagBtn);

    menuTagBtn.addEventListener('click', function(e) {      
        const deleteMenu = document.getElementById(e.target.parentNode.id);
        deleteMenu.parentNode.removeChild(deleteMenu);
        document.getElementById(tagValue).checked = false;  
    })

    return menuTag;
}

const checkTags = document.querySelectorAll('input[type="checkbox"]');
for (const checkTag of checkTags) {
    checkTag.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.getElementById("card_tags").appendChild(createMenuTag(e.target.id));
                refresh();
        }
        else {
            const deleteMenu = document.getElementById(`${e.target.id}_checked`);
            deleteMenu.parentNode.removeChild(deleteMenu);
            refresh();
        }
    });
}

refresh();