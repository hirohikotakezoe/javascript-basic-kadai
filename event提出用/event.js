const btn = document.getElementById('output-btn');
btn.addEventListener('click', () => {
    alert('click!');
});

const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');

console.log(addBtn);
console.log(parentList);


addBtn.addEventListener('click' , () => {
    const childList = document.createElement('li');
    childList.textContent='これは追加したリスト要素です';
    parentList.appendChild(childList);
});

const countBtn = document.getElementById('count-btn');

countBtn.addEventListener('click', () =>{

    const text=document.forms.textForm.textBox.value;
    console.log(text);
    console.log(text.length + 'moji');

    const text2= document.getElementById('thisisapen').value;
    const text3 = window.document.querySelector('input').value;
    
    console.log('thisisapen');
    console.log(text2.length);
    console.log(text3.length);
});


   
const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click', () => {
    const area = document.forms.areaForm.area;
    let selectedArea = '';
    
    for (let i = 0; i < area.length; i++) {
        if (area[i].checked) {
            selectedArea = area[i].value;
            break;
        }
    }

    if (selectedArea) {
        alert(selectedArea);
    } else {
        alert('地域が選択されていません');
    }
});
// os-btnというidを持つhtml要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');

// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () =>{
    const items = document.forms.osForm.os;

    for (let i = 0; i < items.length ; i++){
        if (items[i].checked){
        console.log(items[i]);

        }
    }

});



