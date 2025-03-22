const text = document.getElementById('text');
const button =document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
button.addEventListener('click', () => {
  text.textContent= "ボタンをクリックしました" ;
});