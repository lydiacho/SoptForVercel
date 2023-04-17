const todoData = [
    {
        title : "SCHEDULE",
        todo : [
            "늘어지지 말고 카공가기"
        ]
    },
    {
        title : "TODO",
        todo : [
            "일본여행 블로그 쓰기",
            "오늘자 일기 쓰기"
        ]
    },
    {
        title : "SOPT",
        todo : [
            "솝트 투두 과제",
            "솝트 생각 과제",
            "자스 스터디 과제"
        ]
    },
    {
        title : "HEALTH",
        todo : [
            "숄더프레스",
            "사레레",
            "벤트오버"
        ]
    }

];

/*
<article class="todobox">
    <header class="category_title">
        <h1>TODO</h1>
        <img src="./img/plus.png" alt="할일 추가 버튼"/>
    </header>
    <form class="todoitem">
        <input type="checkbox" id="category2_task1">
        <label for="category2_task1">일본여행 블로그 쓰기</label>
    </form>
    <form class="todoitem">
        <input type="checkbox" id="category2_task2">
        <label for="category2_task2">오늘자 일기 쓰기</label>
    </form>
</article>
*/


function refreshCal() {
    // 캘린더 숫자 새로고침 함수 -> todo Data를 보고 다시 숫자 입력하기 
    const selectedLeft = document.getElementById('selected_left');
    let leftCount = 0;

    for (item of todoData) {
        leftCount += item.todo.length;
    }

    selectedLeft.textContent = leftCount;
    
}


function createTodo(index, todo) {
    // 투두 아이템 html 생성 함수
    const todoitem = document.createElement('form');
    const todoCheckbox = document.createElement('input');
    const todoLabel = document.createElement('label');

    todoCheckbox.type = "checkbox";
    todoCheckbox.id = `category${index}_task${todoData[index].length}`;
    todoLabel.for = `category${index}_task${todoData[index].length}}`;
    todoLabel.textContent = todo;

    todoitem.className = "todoitem";
    todoitem.appendChild(todoCheckbox);
    todoitem.appendChild(todoLabel);

    // todoData에도 추가 
    todoData[index].todo.push(todo);
    refreshCal();   // 캘린더 숫자 새로고침

    return todoitem;

}

function plusTodo(category, todo) { //category : article 태그의 id, todo : 추가하고자하는 할일 text
    // 카테고리에 todoitem을 추가해주는 함수
    const todobox = document.getElementById(category);
    let index = //category가 몇번째 todoData에서 몇번째 index인지 
    todobox.appendChild(createTodo(index,todo));
}