function main(idElement, [...args]) {
    // Переменные с печатаемым элементом, массивом слов, и счетчиками букв и слов
    let typeWriterText = document.querySelector(`#${idElement}`);
    let arrayWords = [...args];
    let wordIndex = 0;
    let charIndex = 0;

    // Функция для создания мигающего курсора
    function blinkCursor() {
        const element = document.createElement("span");
        element.classList.add("blink");
        // Если нужно сделать курсором "\", то пиши "\\", для экранировки символа
        element.textContent = "|"; // Данный курсор можно поменять на другой
        return element;
    }

    // Функция для добавления мигающего курсора в родительский элемент
    function insertCursorToParentNode(child, func) {
        const parent = child.parentNode;
        parent.insertAdjacentElement("beforeend", func);
    }

    // Как потомка передаем переменную с пишущим текстом, и добавляем функцию мигающего курсора, который вернет элемент
    insertCursorToParentNode(typeWriterText, blinkCursor());

    // Функция для написания букв
    function writeWord() {
        setTimeout(() => {
            // Если индекс слов в массиве равен или превышает длину массива со словами
            // То присваиваем индексу слов ноль, для продолжения анимации ввода слов
            if (wordIndex >= arrayWords.length) {
                wordIndex = 0;
            }

            // Содержимому тексту добавляем букву, (Слово в массиве [Индекс слова][Индекс буквы слова])
            typeWriterText.textContent += arrayWords[wordIndex][charIndex];
            // Индексу буквы добавляем единицу
            charIndex++;

            // Если индекс буквы больше или равен длине слова
            if (charIndex >= arrayWords[wordIndex].length) {
                // Через заданый таймаут запускаем функцию по удалению букв из слова
                setTimeout(() => {
                    deleteWord();
                }, 3000);
            } else {
                // Иначе запускаем эту же функцию опять
                writeWord();
            }
        }, 100);
    }

    // Функция для удаления букв
    function deleteWord() {
        setTimeout(() => {
            // Удаляем последнюю букву из содержимого текста
            // (Слово в массиве [Индекс слова].убираем последнюю букву(0, Индекс буквы))
            // После запуска написания слова, у нас есть число символов слова
            typeWriterText.textContent = arrayWords[wordIndex].slice(0, charIndex);
            // Индексу буквы убираем единицу
            charIndex--;

            // Если индекс буквы меньше нуля
            if (charIndex < 0) {
                // То запускаем таймаут, где мы индексу буквы присваиваем ноль
                // Индексу слова прибавляем единицу, тем самым переходим к следующему слову в массиве
                // И запускаем функцию написания слова, уже с новым индексом слова
                setTimeout(() => {
                    charIndex = 0;
                    wordIndex++;
                    writeWord();
                }, 2000);
                console.log("End rewrite typeWriterText");
            } else {
                // Иначе продолжаем удалять буквы
                deleteWord();
            }
        }, 100);
    }

    // Вызываем функцию для написания букв в слове
    writeWord();
}

// Создание объектов на основе функции, передаем аргументами id элемента, в котором будет идти запись букв, и массив слов или предложений
let title = main("title-type-writer", ["page", "typewriter page", "cool typewriter page"]);
let firstText = main("main-text-type-writer", ["write", "delete", "write again"]);
let secondText = main("second-text-type-writer", ["- Lorem ipsum dolor sit amet.", "- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nihil fuga in debitis atque adipisci!", "- Lorem ipsum dolor sit amet consectetur adipisicing elit."]);

let one = main("one", ["one", "two", "three"]);
let two = main("two", ["three", "one", "two"]);
let three = main("three", ["two", "three", "one"]);

let link = main("some-link-type-writer", ["Link text one", "Link text two", "Link text three"]);