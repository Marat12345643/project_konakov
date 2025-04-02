'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.getElementById('footer__button').addEventListener('click', function() {
    document.getElementById('interactive-button').innerText = "Спасибо за то, что уделили свое внимание!";
    console.log('Скрипт отработал корректно')
});

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
document.getElementById('openFormButton').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
});

// Обработка отправки формы
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    alert(`Вы успешно записались на занятие!\nТелефон: ${phone}\nЭлектронная почта: ${email}`);
    document.getElementById('registrationForm').style.display = 'none'; // Закрываем форму после успеха
});

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('registrationForm');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


