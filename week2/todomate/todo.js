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

let completeCount = 0;

function refreshCal() {
    const selectedLeft = document.getElementById('selected_left');
    let leftCount = 0;

    for (item of todoData) {
        leftCount += item.todo.length;
    }

    selectedLeft.textContent = leftCount - completeCount;
}


function createTodo(index, todo, todoindex) {
    const todoitem = document.createElement('form');
    const todoCheckbox = document.createElement('input');
    const todoLabel = document.createElement('label');

    todoCheckbox.type = "checkbox";
    todoCheckbox.id = `category${index}_task${todoindex}`; 
    todoCheckbox.addEventListener('change', function(e) {
        const checkId = e.target.id;
        if (e.target.checked) {
            completeCount++;
            refreshCal();
        } else {
            completeCount--;
            refreshCal();
        }
    });

    todoLabel.htmlFor = `category${index}_task${todoindex}`;
    todoLabel.textContent = todo;

    todoitem.className = "todoitem";
    todoitem.appendChild(todoCheckbox);
    todoitem.appendChild(todoLabel);

    return todoitem;

}

function plusTodo(category, todo) { //category : article 태그의 id, todo : 추가하고자하는 할일 text
    const todobox = document.getElementById(category);
    const index = category[category.length-1]; //category가 몇번째 todoData에서 몇번째 index인지 
    todobox.appendChild(createTodo(index,todo, todoData[index-1].todo.length+1));

    todoData[index-1].todo.push(todo);
    refreshCal();  
}

function refreshTodo() {
    for (let i = 1; i<=todoData.length; i++) {
        for (let j = 0; j < todoData[i-1].todo.length; j++) {
            const oneTodo = createTodo(i, todoData[i-1].todo[j], j+1);
            document.getElementById(`category${i}`).appendChild(oneTodo);
        }
    }
}

const plusBtns = document.getElementsByClassName('plus_btn');
for (const plusBtn of plusBtns) {
    plusBtn.addEventListener('click', function(e){
        document.getElementById('modal').style.display = 'flex';

        const modalBtn = document.getElementById('modal_btn');
        modalBtn.addEventListener('click', function() {
            plusTodo(e.target.parentNode.parentNode.id, document.getElementById('add_todo').value);
            document.getElementById('modal').style.display = 'none';
        });

    });
}

refreshTodo();

