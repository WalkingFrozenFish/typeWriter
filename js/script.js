function main(idElement, cursor = "|", [...args]) {
    // Переменные с печатаемым элементом, массивом слов, и счетчиками букв и слов
    let typeWriterText = document.querySelector(`#${idElement}`);
    let arrayWords = [...args];
    let wordIndex = 0;
    let charIndex = 0;

    // Функция для создания мигающего курсора
    function blinkCursor() {
        const element = document.createElement("span");
        element.classList.add("blink");
        // Данный курсор можно поменять на другой
        // element.textContent = "|";
        element.textContent = `${cursor}`;
        return element;
    }

    function insertCursorToParentNode(child, func) {
        const parent = child.parentNode;
        parent.insertAdjacentElement("beforeend", func);
    }

    insertCursorToParentNode(typeWriterText, blinkCursor());

    // let blink = document.querySelector(".blink");

    // blink.textContent = "|";
    // let pn = typeWriterText.parentNode
    // pn.insertAdjacentElement("beforeend", blinkCursor())

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

    // function writeWord() {
    //     setTimeout(() => {
    //         if (wordIndex >= arrayWords.length) {
    //             wordIndex = 0;
    //         }

    //         typeWriterText.textContent += arrayWords[wordIndex][charIndex];
    //         charIndex++;
    //         if (charIndex >= arrayWords[wordIndex].length) {
    //             setTimeout(() => {
    //                 deleteWord();
    //             }, 3000);
    //         } else {
    //             writeWord();
    //         }
    //     }, 100);
    // }

    // function deleteWord() {
    //     setTimeout(() => {
    //         typeWriterText.textContent = arrayWords[wordIndex].slice(0, charIndex);
    //         charIndex--;
    //         if (charIndex < 0) {
    //             setTimeout(() => {
    //                 charIndex = 0;



    //                 wordIndex++;
    //                 writeWord();
    //             }, 2000)
    //             console.log("End rewrite typeWriterText");
    //         } else {
    //             deleteWord();
    //         }
    //     }, 100);
    // }

    writeWord();
}

let one = main("one", "$", ["Один", "Два", "Три"]);
let five = main("five", "@", ["Четыре", "Пять"]);
let two = main("two", "\\", ["WOOOOOOOOW", "TEEEEEEEEEXT", "MAIN function"])