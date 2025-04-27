'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

const footer__button = document.getElementById('footer__button'); //ищем элемент с id="footer__button"
if (footer__button) { // если нашли
    //добавляем на него событие обработки клика
    footer__button.addEventListener('click', function() {
        document.getElementById('interactive-button').innerText = "Спасибо за то, что уделили свое внимание!";
        console.log('Скрипт отработал корректно')
    });
}//конец

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

    const header = document.querySelector('.header');       // создаем переменную находя блок по классу

    if (header) {                                           // проверяем существование элемента в DOM
        console.log('Константа header существует');

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем высоту блока/элемента (создание переменной, которая не будет меняться).
        *   3. Проверка условия (навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку): если страница прокручивается.
        *       3.1. Да: Получаем значение насколько прокрутили страницу (создание переменной, которая будет меняться).
        *           3.1.1 Проверка условия (сравниваем высоту элемента и значение прокрученной страницы): если расстояние от верха страницы больше высоты элемента
        *               3.1.1.1. Да: устанавливаем класс модификатора на элемент
        *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляем класс модификатора у элемента
        *       3.2. Нет: Конец
        *   4. Конец
        * 
        *   Блок-схема: /images/блок-схема.png
        */

        const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

        document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

            console.log('Страница скроллится');

            let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

            if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
                header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
            } else {
                header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
            }

        })

    }
});
 
// Ждем, пока весь контент страницы будет загружен
document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку входа и форму входа
    const loginButton = document.getElementById('loginButton'); // Кнопка "Войти"
    const loginForm = document.querySelector('.login'); // Форма входа

    // Добавляем обработчик события на кнопку "Войти"
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие кнопки
        loginForm.classList.toggle ('hidden'); // Переключаем видимость формы
    });
});

document.getElementById('chat-button').onclick = function() {
    document.getElementById('chat-window').style.display = 'block';
};

document.getElementById('close-chat').onclick = function() {
    document.getElementById('chat-window').style.display = 'none';
};

//Поддержка
document.getElementById('send-button').onclick = function() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message) {
        const messagesDiv = document.getElementById('chat-messages');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        input.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Прокрутка вниз
    }
};

//Вход в ЛК
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const closeButton = document.getElementById('closeButton');

    loginButton.addEventListener('click', function() {
        loginFormContainer.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        loginFormContainer.classList.add('hidden');
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Здесь вы можете добавить логику аутентификации пользователей
        alert('Форма отправлена');
        loginFormContainer.classList.add('hidden'); // Закрываем форму после отправки
    });
});



//Запись на занятие
const openFormButton = document.getElementById('openFormButton'); //ищем элемент с id="openFormButton"
if (openFormButton) { // если нашли
    //добавляем на него событие обработки клика
    openFormButton.addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
});
}

// Обработка отправки формы
const form = document.getElementById('form'); //ищем элемент с id="form"
if (form) { // если нашли
    //добавляем на него событие обработки клика
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    alert(`Вы успешно записались на занятие!\n Телефон: ${phone}\n Электронная почта: ${email}`);
    document.getElementById('registrationForm').style.display = 'none'; // Закрываем форму после успеха
});}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('registrationForm');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



// 4 задание
const cardContainer = document.querySelector('.cards');

if (cardContainer) {

    const dataTitleCards = ['Иванова Анна Ивановна', ' Васильев Иван Прохорович', 'Петров Василий Петрович', 'Алексеев Егор Егорович'];

    const titleCards = cardContainer.querySelectorAll('.teachers__name');

     console.log(titleCards); // проверка в консоли

    titleCards.forEach((item, index) => {
        item.textContent = dataTitleCards[index];
    });

}


/*
// 5 задание
const cardsPrice = document.querySelector('.price');
if (cardsPrice) {
    const priceList = cardsPrice.querySelector('.price__list');

    const cardsPriceData = {
        price1: {
            level: 'Русский для высокого уровня',
            price: '6 520 ₽',
            description: 'Выбрали: 435',
            button: 'Оставить заявку'
        },
        price2: {
            level: 'Английский для высокого уровня',
            price: '6 520 ₽',
            description: 'Выбрали: 177',
            button: 'Оставить заявку'
        },
        price3: {
            level: 'История для высокого уровня',
            price: '6 520 ₽',
            description: 'Выбрали: 379',
            button: 'Оставить заявку'
        },
        price4: {
            level: 'Математика для высокого уровня',
            price: '6 520 ₽',
            description: 'Выбрали: 798',
            button: 'Оставить заявку'
        }
    }


    const createCard = (level, price, description, button) => {
        const card = `
            <li class="price__item">
                <p class="price__level">${level}</p>
                <p class="price__price">${price}</p>
                <p class="price__description">${description}</p>
                <button class="price__button button">${button}</button>
            </li>
    `;
        return card;
    }

    for (const cardKey in cardsPriceData) {
        const card = cardsPriceData[cardKey];
        const cardElement = createCard(card.level, card.price, card.description, card.button);
        priceList.insertAdjacentHTML('beforeend', cardElement);
    }
}*/



/* Лекция 6 */
const cardsPrice = document.querySelector('.price');
if (cardsPrice) {
    const priceList = cardsPrice.querySelector('.price__list');

    // Пример URL для получения данных с сервера
    const apiUrl = 'data.json';

    // Функция для создания карточки
    const createCard = (level, price, description, button) => {
        const card = `
            <li class="price__item">
                <p class="price__level">${level}</p>
                <p class="price__price">${price}</p>
                <p class="price__description">${description}</p>
                <button class="price__button button">${button}</button>
            </li>
    `;
        return card;
    }

    // Загрузка данных с сервера
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Данные
            console.log(typeof (data)); // Тип полученных данных

            // for (const item in data) {
            //     const card = data[item];

            //     const cardElement = createCard(card.level, card.price, card.description, card.button);
            //     priceList.insertAdjacentHTML('beforeend', cardElement);
            // }

            data.forEach(item => {
                const cardElement = createCard(item.level, item.price, item.description, item.button);
                priceList.insertAdjacentHTML('beforeend', cardElement);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
}

//  Перезагрузчик
const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }



    //slider
    const swiper = new Swiper('.sample-slider', {
        loop: true,
        autoplay: {         //added
            delay: 2000,    //added
        },                  //added
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        },
    })