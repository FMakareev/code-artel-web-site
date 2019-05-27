// @ts-ignore
import icon_webdevSvg from '../../../../components/Icons/icon_webdev.svg';
// @ts-ignore
import icon_blockchainSvg from '../../../../components/Icons/icon_blockchain.svg';
// @ts-ignore
import icon_applicationSvg from '../../../../components/Icons/icon_application.svg';
// @ts-ignore
import icon_tech_supSvg from '../../../../components/Icons/icon_tech_sup.svg';
// @ts-ignore
import icon_escortSvg from '../../../../components/Icons/icon_escort.svg';
// @ts-ignore
import hardwareSvg from '../../../../components/Icons/icon_hardware.svg';
// @ts-ignore
import EmailIconSvg from '../../../../components/Icons/EmailIcon.svg';
// @ts-ignore
import PhoneIconSvg from '../../../../components/Icons/PhoneIcon.svg';
// @ts-ignore
import AddressIconSvg from '../../../../components/Icons/AddressIcon.svg';

import { LandingData } from '../../Types';

export const data: LandingData = {
  main: {
    title: 'CODEARTEL',
    description: 'Мы разрабатываем',
    messages: ['сервисы', 'приложения'],
    image: 'url(../../assets/images/bg.png)',
    buttonText: 'Получить бесплатную консультацию',
  },
  services: {
    title: 'УСЛУГИ',
    description: 'Комплексные услуги, которые флормируют цифровое преобразование',
    serviceList: [
      {
        icon: icon_webdevSvg,
        title: 'Веб-разработка',
        arr: [
          'Корпоративные сайты',
          'Интернет магазины',
          'Сложные веб-сервисы и интеграции',
          'Высоконагруженные проекты',
          'Промосайты',
          'Чат боты',
          'Веб скарпинг',
        ],
      },
      {
        icon: icon_blockchainSvg,
        title: 'Блокчейн',
        arr: [
          'Разработка сервисов с использованием существующих блокчейн платформ',
          'Внедрение блокчейна в существущие сервисы',
        ],
      },
      {
        icon: icon_applicationSvg,
        title: 'Разработка приложений',
        arr: ['Мобильные приложения для IOS и Android', 'AR визитки'],
      },
      {
        icon: icon_tech_supSvg,
        title: 'Сопровождение сайтов и приложений',
        arr: ['Развитие технологически сложных веб-проектов', 'Сопровождение мобильных приложений'],
      },
      {
        icon: icon_escortSvg,
        title: 'Хостинг и техническая поддержка',
        arr: ['Аренда серверов', 'Настройка и администрирование серверов'],
      },
      {
        icon: hardwareSvg,
        title: 'Разработка аппаратно-программных комплексов',
        arr: ['Интернет вещей'],
      },
    ],
    callToActionText: 'Хотите работать с нами над вашим продуктом?',
    buttonText: 'Связаться',
  },
  portfolio: {
    title: 'НАШИ РАБОТЫ',
    description: 'Мы помогаем нашим клиентам',
    styledWord: 'выиграть',
    portfolioData: [
      {
        tags: 'business',
        title: 'Antifake',
        description: 'is a system for supply accounting and tracking lot',
        id: 'emcdpo.info',
        imagePreview: '../../assets/images/antifake.png',
        alt: 'is a system for supply accounting and tracking lot',
      },
      {
        tags: 'business',
        title: 'Emernotar',
        description: 'is a service for asset protection using blockhing',
        id: 'emernotar.io',
        imagePreview: '../../assets/images/emernotar.png',
        alt: 'is a service for asset protection using blockhing',
      },
      {
        tags: 'business',
        title: 'The Bureau',
        description:
          "is a service for user's credit history secure uploading and prividing banks with it",
        id: 'finvariant.com',
        imagePreview: '../../assets/images/bureau.png',
        alt: "is a service for user's credit history secure uploading and prividing banks with it",
      },
      {
        tags: 'business',
        title: '4-ый проект',
        description: 'is a system for supply accounting and tracking lot ',
        id: 'emcdpo.info',
        imagePreview: '../../assets/images/placeholder.png',
        alt: '',
      },
      {
        tags: 'business',
        title: '5-ый проект',
        description: 'is a service for asset protection using blockhing',
        id: 'emernotar.info',
        imagePreview: '../../assets/images/placeholder.png',
        alt: '',
      },
    ],
  },
  aboutUs: {
    title: 'О НАС',
    description: ['Преобразуем великолепные', 'идеи в великолепный'],
    styledWord: 'софт',
    sectionText:
      'Члены нашей команды обладают разнообразными компетенциями и навыками, ' +
      'что позволяет нам выполнять широкий спектр услуг: от сложных web-сервисов, ' +
      'с применением блокчейн технологии до проектирования и производства радиоэлектроники.',
    stack: [
      'html',
      'css',
      'react.js',
      'typescript',
      'apollo',
      'node.js',
      'python',
      'asyncio',
      'mongodb',
      'postgresql',
      'elasticsearch',
      'graphene',
      'redis',
      'go',
      'docker',
      'react native',
      'java',
      'custom solution',
    ],
    img: '../../assets/images/aboutUs.png',
  },
  contacts: {
    title: 'КОНТАКТЫ',
    description: 'Мы ищем партнеров, а не клиентов',
    sectionText:
      'Мы всегда находимся в поиске ориентированных на ценность компаний и людей, ' +
      'которые хотят оказать большое влияние. Напишите нам, мы хотели бы услышать о вашей ' +
      'компании и как мы можем поддержать ваш следующий шаг.',
    contactInfo: [
      {
        icon: EmailIconSvg,
        href: 'mailto:peter.uspenskii@code-artel.ru',
        text: 'peter.uspenskii@code-artel.ru',
      },
      {
        icon: PhoneIconSvg,
        href: 'tel:+ 79818544645',
        text: '+ 7 981 854 46 45',
      },
      {
        icon: AddressIconSvg,
        href: '',
        text: 'Санкт-Петербург',
      },
    ],
    agreement:
      'Нажимая на кнопку «Отправить заявку», ' +
      'вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности.',
  },
};
