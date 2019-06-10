"use strict"

document.querySelector("button").onclick = mySlider; // кнопка запускает функцию mySlider

// обращаемся ко всем картинкам и создаем счетчик

let imagesInSlider = document.querySelectorAll(".img_slider img");
let counter = 0;

function mySlider() {

    if (counter < imagesInSlider.length) {

        let img = imagesInSlider[counter]; // связываем счетчик с переменной по картинкам
            img.style.display = 'block'; // меняем display всем картинкам
            img.classList.add('animated', 'zoomIn'); // навешиваем новые классы - animated
            img.addEventListener('animationend', () => { // получаем момент, когда анимация отработала и улетает
            img.classList.add('animated', 'zoomOut', 'delay-5s');
            }); 
    counter++; // чтобы работали все картинки
    } 
    else {
        startNewSlader();// приводим классы в первоначальное сосотояние, создаем функцию startNewSlader()? она описана ниже
    }
    // поднимаемся наверх функции, чтобы добавить проверку, если (counter === imagesInSlider.length), все картинки
} // функция уже работает, но нужно запустить button - вверх

function startNewSlader() {
    imagesInSlider.forEach((item)=> {
        item.classList.remove('animated', 'zoomIn','zoomOut', 'delay-5s');// сбрасиваем все начальные настройки
        item.style.display = 'none';
    });
    counter = 0;
    mySlider();
    }