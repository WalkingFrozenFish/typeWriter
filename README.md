# Проект - TypeWriter

***

## Описание проекта
Функция для создания визуального эффекта пишущей машинки на сайте.

***

## Что нужно для запуска и работы

### Подключение:
1. Через скрипт в странице html  
`<script>Код скрипта</script>`
2. Через внешнее подключение скрипта  
`<script src="Путь до скрипта"></script>`

### Работа с разметкой:
1. Желательно использовать тег `<span>`
2. Присваиваете тегу id
3. Ничего внутри тега не пишите

### Работа со скриптом:
Создаете переменную, в которую присваиваете функцию main со следующими аргументами:
1. id - id элемента из разметки, пишите без знака `#`
2. args - массив со словами или предложениями (Записывать в виде ["Какой то текст", "Это функция!", "Печатаю текст"])

Как должно выглядеть:  
`let one = main("one", ["Один", "Два", "Три"]);`

### Стилизация:
1. Присваиваете элементу класс, и стилизуете по своему усмотрению
2. Сменить курсор можно на любой другой, для этого найдите в скрипте функцию `blinkCursor`, найдите строку `element.textContent = "|";`, и поменяйте `|` на любой другой

### Возможные проблемы:
1. При отсутствии тега на странице, работа скрипта может быть остановлена с ошибкой
2. При использовании символа `"\"` в качестве курсора, нужно использовать экранирование (Должно выглядеть так `"\\"`)

***

## Ссылка на Github pages
[Перейти на страницу проекта](https://walkingfrozenfish.github.io/typeWriter/)

***

## Список основных файлов
Название файла  | Содержание файла
----------------|----------------------
README.md       | Файл README
screen.jpg      | Скриншот
index.html      | Индексный файл
style.css       | Таблица стилей
script.js       | Файл скрипта

***

## Скриншот проекта
![Скриншот]()
