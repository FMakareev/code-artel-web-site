# Структура проекта

* src
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
        * user - шаблон модуля пользователя
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
