// document.addEventListener('DOMContentLoaded', function() {
//     const modal = document.getElementById("myModal");
//     const btn = document.getElementById("myBtn");
//     const span = document.getElementsByClassName("close")[0];
//
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }
//
//     span.onclick = function() {
//         modal.style.display = "none";
//     }
//
//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     }
// });


// Получаем все элементы с классом 'modal'
var modals = document.getElementsByClassName('modal');

// Получаем все элементы с id, начинающимся на 'myBtn'
var btns = Array.from(document.querySelectorAll('[id^="myBtn"]'));

// Получаем все элементы с классом 'close'
var spans = Array.from(document.getElementsByClassName('close'));

// Проходимся по каждой кнопке
btns.forEach(function(btn, index) {
    // Добавляем обработчик клика, который открывает соответствующее модальное окно
    btn.onclick = function() {
        modals[index].style.display = "block";
    }
});

// Проходимся по каждому элементу 'close'
spans.forEach(function(span, index) {
    // Добавляем обработчик клика, который закрывает соответствующее модальное окно
    span.onclick = function() {
        modals[index].style.display = "none";
    }
});

// Если пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
    for (var i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
