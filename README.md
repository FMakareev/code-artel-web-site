# react-universal-ts-boilerplate


## Начало

* npm install
* npm run start:ssr:dev или npm run start:csr:dev



## npm scripts

### client side render 

* build:csr:prod - сборка проекта в режиме production
* build:csr:dev - сборка проекта в режиме development
* start:csr:prod - старт проекта в режиме production для разработки с hmr 
* start:csr:dev - сборка проекта в режиме development для разработки с hmr 
* start:csr:server - запуск билда проекта, запускается обычный express сервер

### server side render 

* build:ssr:prod - сборка проекта в режиме production
* build:ssr:dev - сборка проекта в режиме development
* start:ssr:prod - старт проекта в режиме production для разработки с hmr 
* start:ssr:dev - сборка проекта в режиме development для разработки с hmr 
* start:ssr:server - запуск билда проекта

### тестирование 

* test - запуск unit тестов проекта, библиотека storybook исключена из тестов
* test:snapshot:update - обновление снепшотов тестов проекта
* test:sb:snapshot - запуск тестиривания storybook библиотеки с помощью скриншотов
* test:sb:snapshot:update - зобновление скриншотов тестов storybook библиотеки

### storybook

* storybook - запуск в режиме разработки
* build-storybook - сборка статического билда

### Линтинг и форматирование

* lint:ts - линтинг ts кода
* format - форматирование кода преттиром
* check-merge-conflict - проверка конфликтов при слиянии комитов/веток

## Структура проекта

* .configs 
    * jest - конфигурации для jest
    * loaders - загрузчики для webpack
    * setupTests.js
    * webpack.client.js - конфиг для сборки клиентского кода
    * webpack.server.js - конфиг для сборки серверного кода
* .scripts - скрипты для запуска проекта
    * csr - client side render
    * ssr - server side render
* .storybook - конфигурация storybook
* .tools - вспмомошательные утилиты дя сборщика
* .dist - билд проекта
* docs - документация сборки
* src - исходники проекта
    * apollo - [Apollo client](https://www.apollographql.com/)
        * helpers - вспомогательные методы
        * interfaces - интерфейсы описывающие gql типы и методы
        * mocks - mock resolvers, методы для создания своих заглушек на запросы и мутации
          * query
          * mutation 
        * index.client.tsx - Browser config
        * index.server.tsx - Server config
        * index.mock.tsx - mock client для разработки без сервера
        * schema.graphql - схема описывающая структуру API, должна соответствевать бекенду 
        * graphql.d.ts - заголовочный файл
        * package.json
        * ...
    * assets - картинки, шрифты, прочая статика
        * ...
    * client - Точка входа клиента
        * index.tsx 
        * index.html - шаблон html страницы, необходим для сборки проекта в режиме csr 
        * package.json
    * components - Набор компонентов
        * ...
        * index.tsx - компоненты обязательно прописываются сюда и импортирутся отсуда
        * package.json
    * containers - контейнеры приложения для клиента и сервера, в них добавляем новые провайдеры по необходимости
        * AppProvidersClient.tsx
        * AppProvidersServer.tsx
    * modules - Модули 
        * templateEmail - модуль с шаблонами html писем
        * authorization - шаблон модуля пользователя
        * home - шаблон модуля главной страницы
        * ...
        * index.tsx
        * package.json
    * server - Точка входа для сервера
        * renderers - методы рендера react на сервере
            * renderApp.tsx - главный метод, его можно переиспользовать в других методах 
            * renderEmailTemplate.tsx - генератор статики для email рассылки
        * index.tsx - точка входа для сервера
        * template.tsx - html шаблон, используется в renderApp.tsx
        * package.json
    * shared - директория содержит код который может быть использован абсолютно в любом месте приложения 
    например: константы, конфигурация роутера и т.д.
    * style - Стили и все что с ними связано
        * ...
        * index.tsx
        * package.json
* stories - storybook истории 
* stories-static - статика storybook
* [.editorconfig](https://editorconfig.org/)
* [.gitignore](https://git-scm.com/docs/gitignore)
* [.prettierrc.js](https://prettier.io/docs/en/configuration.html)
* [babel.config.js](https://babeljs.io/docs/en/configuration) - конфиг обеспечивающий работу скриптов сборки проекта
* ca-config.json - конфиг содержит переменные окружения для разных вариаций запуска проекта через npm скрипты
* jest.config.js - общий конфиг jest для проекта, обеспечивает работу unit тестов react компонент
* jest.sb.config.js - конфиг для тестирования скриншотами историй storybook
* [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 
* [tslint.json](https://palantir.github.io/tslint/usage/configuration/)


# Тестирование

## Тестирование storybook

1. Собираем билд storybook командой `npm run build-storybook`
2. После запускаем тест `npm run test:sb:snapshot`
3. Результат в `stories/__image_snapshots__`

Если нужно полностью обновит результаты скриншотов выполняем `npm run test:sb:snapshot:update`

## Unit тесты 

> (на данный момент в связи с  переездом на typescript не работает)

1. пишем тесты, для каждого компонента тест лежит рядом с этим компонентом, 
название файла теста строится по шаблону `{названиеТестируемогоФайла}.test.tsx`
2. запускаем тесты командой `npm run test`
3. результаты будут в папках `__snapshot__` рядом с каждым тестом

Для обновления снепшотов выполнить `npm run est:snapshot:update`.

# Рекомендации по работе

* конфигурацию роутера, константы не относящиеся к redux, размещать только в `src/shared`
* интерфейсы gql запросов, мутаций и типов размещать в `src/shared`
* как описывать запросы, типы и мутации читать [тут](https://www.apollographql.com/docs/react/recipes/static-typing)
* для обновления пакетов в проекте можно воспользоватся утилитой [npm-check](https://github.com/dylang/npm-check)
* 

## mock client apollo

to be continued...

## Стилизация через styled-components + styled-system

В проекте для стилизации используем:

* 💅 [styled-components](https://www.styled-components.com/) - css-in-js 
* [styled-system](https://styled-system.com/) 

to be continued...

## Начало работы

1. определитесь по макетам сколько у вас лейаутов, и к каким контекстам они относятся: 
root, auth, admin и т.д. 
2. В конфиг стилей выпишите все: цвета, тени, бордеры, линейные градиенты, заранее определите 
разные transition. Конфиг темы лежит в [src/styles/StyledThemeProvider.tsx](src/styles/StyledThemeProvider.tsx) 
3. В конфиг стилей выпишите все варианты и поместите их сюда [src/styles/variants](src/styles/variants), оформляем
компоненты:
    1. кнопки (визуальное оформление и размерности отдульно)
    2. текстовые поля (визуальное оформление и размерности отдульно)
    3. компоненты карточки (только визуал)
    4. варианты текста (сортируется по заголовкам от h1 до минимального заголовка проекта 
    и прочие врианты текст, если текст отличается только всетом но размеры одинаковые это 
    тоже отдельный вариант)
    5. можно какие то кастомные вещи так же писать тут, но это на ваше усмотрение
4. создайте для своих страниц модули и маршруты, заранее определите для них лейауты
5. в конфиге роутера передайте свою разметку для ваших лейаутов, конфиг роутера в [src/shared/config] 
   
