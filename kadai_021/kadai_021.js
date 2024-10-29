const text = document.getElementById('text');
const btn = document.getElementById('btn');


btn.addEventListener('click',() => {
    
    setTimeout(() => {text.textContent = 'clickされました！（非同期処理）';},2000);

});


