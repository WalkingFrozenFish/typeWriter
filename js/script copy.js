let text = document.querySelector(".type-writer");
let countChars = 0;
let word = "Type writer page";
let arrayWords = [
    "Woooooooooow text!",
    "Hello World from typewriter function!",
    "Have a nuce day!",
    "JS is cooooooooooooooooool"
];


function writeWord() {
    // Сделать счетчик слов в массиве, и передавать слово из массива отсюда
    // Сделать как создание экземпляров

    // Функция для побуквенного написания слова
    setTimeout(() => {
        // Каждые 100мс добавляем одну букву в текстовый блок
        text.textContent += word[countChars];
        // Увеличиваем счетчик для получения индекса буквы
        countChars++;
        // Если счетчик больше или равен длине слова
        if (countChars >= word.length) {
            // Запускаем функцию для побуквенного удаления слова через таймаут
            setTimeout(() => {
                deleteWord();
            }, 3000);
        } else {
            // Иначе Продолжаем добавлять буквы
            writeWord();
        }
    }, 100);
}

function deleteWord() {
    // Функция для побуквенного удаления слова
    setTimeout(() => {
        // Каждые 100мс удаляем одну букву из текстового блока
        text.textContent = word.slice(0, countChars);
        // Уменьшаем счетчик для получения индекса буквы
        countChars--;
        // Если счетчик меньше нуля
        if (countChars < 0) {
            // Завершаем логом
            setTimeout(() => {
                countChars = 0;
                writeWord();
            }, 2000)
            console.log("End rewrite text");
        } else {
            // Иначе запускаем эту функцию для удаления следующего символа
            deleteWord();
        }
    }, 100);
}

writeWord();