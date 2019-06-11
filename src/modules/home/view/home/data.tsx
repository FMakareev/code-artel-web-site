// @ts-ignore
import icon_webdevSvg from '../../components/Icons/icon_webdev.svg';
// @ts-ignore
import icon_blockchainSvg from '../../components/Icons/icon_blockchain.svg';
// @ts-ignore
import icon_applicationSvg from '../../components/Icons/icon_application.svg';
// @ts-ignore
import icon_tech_supSvg from '../../components/Icons/icon_tech_sup.svg';
// @ts-ignore
import icon_escortSvg from '../../components/Icons/icon_escort.svg';
// @ts-ignore
import icon_hardwareSvg from '../../components/Icons/icon_hardware.svg';
// @ts-ignore
import EmailIconSvg from '../../components/Icons/EmailIcon.svg';
// @ts-ignore
import PhoneIconSvg from '../../components/Icons/PhoneIcon.svg';
// @ts-ignore
import AddressIconSvg from '../../components/Icons/AddressIcon.svg';

import { ISection } from '../../Types';
import { IService } from '../../components/SectionServices/types';
import { IPortfolioWork } from '../../components/SectionPortfolio/types';
import { IStack } from '../../components/SectionAboutUs/types';

export const data = {
  main: {
    title: 'CODE ARTEL',
    description: 'Мы разрабатываем',
  },
  services: {
    title: 'УСЛУГИ',
    description: 'Комплексные услуги, которые формируют цифровое преобразование',
    services: [
      {
        icons: icon_webdevSvg,
        title: 'Веб-разработка',
        description:
          '<ol><li>Корпоративные&nbsp;</li><li>Интернет магазины</li><li>Сложные веб-сервисы и интеграции</li><li>Высоконагруженные проекты</li><li>Промосайты</li><li>Чат боты</li><li>Веб скрапинг<br><br ></li></ol>',
        isMain: true,
      },
      {
        icons: icon_blockchainSvg,
        title: 'Блокчейн',
        description:
          '<ol><li>Разработка сервисов с использованием существующих блокчейн платформ</li><li>Внедрение блокчейна в существующие сервисы<br>​​​​​​​<br><br></li></ol>',
        isMain: true,
      },
      {
        icons: icon_applicationSvg,
        title: 'Разработка приложений',
        description:
          '<ol><li>Мобильные приложения по IOS и Android</li><li>AR визитки<br><br><br><br></li></ol>',
        isMain: true,
      },
      {
        icons: icon_tech_supSvg,
        title: 'Сопровождение сайтов и приложений',
        description: '',
        isMain: true,
      },
      {
        icons: icon_escortSvg,
        title: 'Хостинг и техническая поддержка',
        description: '',
        isMain: true,
      },
      {
        icons: icon_hardwareSvg,
        title: 'Разработка аппаратно-программных комплексов',
        description: '',
        isMain: true,
      },
    ],
  },
  portfolio: {
    title: 'НАШИ РАБОТЫ',
    description: 'Мы помогаем нашим клиентам выиграть',
    portfolioData: [
      {
        tags: 'business',
        title: 'Antifake',
        description: 'is a system for supply accounting and tracking lot',
        href: 'emcdpo.info',
        id: 1,
        imagePreview: '../../assets/images/antifake.png',
        alt: 'is a system for supply accounting and tracking lot',
      },
      {
        tags: 'business',
        title: 'Emernotar',
        description: 'is a service for asset protection using blockchain',
        href: 'emernotar.io',
        id: 2,
        imagePreview: '../../assets/images/emernotar.png',
        alt: 'is a service for asset protection using blockhing',
      },
      {
        tags: 'business',
        title: 'The Bureau',
        description:
          "is a service for user's credit history secure uploading and prividing banks with it",
        href: 'finvariant.com',
        id: 3,
        imagePreview: '../../assets/images/bureau.png',
        alt: "is a service for user's credit history secure uploading and prividing banks with it",
      },
      {
        tags: 'business',
        title: '4-ый проект',
        description: 'is a system for supply accounting and tracking lot ',
        href: 'emcdpo.info',
        id: 4,
        imagePreview: '../../assets/images/placeholder.png',
        alt: '',
      },
      {
        tags: 'business',
        title: '5-ый проект',
        description: 'is a service for asset protection using blockhing',
        href: 'emernotar.info',
        id: 5,
        imagePreview: '../../assets/images/placeholder.png',
        alt: '',
      },
    ],
  },
  aboutUs: {
    title: 'О НАС',
    description: '',
    styledWord: 'софт',
    content:
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
  },
  contacts: {
    title: 'КОНТАКТЫ',
    description: 'Мы ищем партнеров, а не клиентов',
    content:
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
  },
};

export const StabServices: IService[] = [
  {
    icons: [
      {
        alt: 'Test',
        image: {
          name: icon_webdevSvg,
        },
      },
    ],
    title: 'Веб-разработка',
    description:
      '<ol><li>Корпоративные&nbsp;</li><li>Интернет магазины</li><li>Сложные веб-сервисы и интеграции</li><li>Высоконагруженные проекты</li><li>Промосайты</li><li>Чат боты</li><li>Веб скрапинг<br><br ></li></ol>',
    isMain: true,
  },
  {
    icons: [
      {
        alt: 'Test',
        image: {
          name: icon_blockchainSvg,
        },
      },
    ],
    title: 'Блокчейн',
    description:
      '<ol><li>Разработка сервисов с использованием существующих блокчейн платформ</li><li>Внедрение блокчейна в существующие сервисы<br>​​​​​​​<br><br></li></ol>',
    isMain: true,
  },
  {
    icons: [
      {
        alt: 'Test',
        image: {
          name: icon_applicationSvg,
        },
      },
    ],
    title: 'Разработка приложений',
    description:
      '<ol><li>Мобильные приложения по IOS и Android</li><li>AR визитки<br><br><br><br></li></ol>',
    isMain: true,
  },
  {
    icons: [
      {
        alt: 'Test',
        image: {
          name: icon_tech_supSvg,
        },
      },
    ],
    title: 'Сопровождение сайтов и приложений',
    description:
      '<ol><li>Развитие технологически сложных веб-проектов</li><li>Сопровождение мобильных приложений&nbsp;<br><br><br><br><br><br></li></ol>',
    isMain: true,
  },
  {
    icons: [
      {
        alt: 'Test',
        image: {
          name: icon_escortSvg,
        },
      },
    ],
    title: 'Хостинг и техническая поддержка',
    description:
      '<ol><li>Аренда серверов</li><li>Настройка и администрирование серверов<br><br><br><br><br><br><br><br></li></ol>',
    isMain: true,
  },
  {
    icons: [
      {
        alt: 'Test',
        image: {
          name: icon_hardwareSvg,
        },
      },
    ],
    title: 'Разработка аппаратно-программных комплексов',
    description:
      '<ol><li>Интернет вещей</li><li>​​​​​​​Заказная разработка<br><br><br><br><br><br><br><br></li></ol>',
    isMain: true,
  },
];

export const StabSections: ISection[] = [
  {
    id: '5ced3681a223dc4b3',
    title: 'CODE ARTEL',
    description: 'Мы разрабатываем',
  },
  {
    id: '5ced3681a223dc2b1487a4b3',
    title: 'услуги',
    description: 'Комплексные услуги, которые формируют цифровое преобразование',
  },
  {
    id: '5ced3681a223dc2b1487a4b3',
    title: 'Наши работы',
    description: 'Мы помогаем нашим клиентам <strong>выиграть</strong>',
  },
  {
    id: '5ced3681a223dc2b1487a4b3',
    title: 'О НАС',
    description:
      'Преобразуем великолепные <strong>идеи</strong> в великолепный <strong>софт</strong>',
    content:
      'Члены нашей команды обладают разнообразными компетенциями и навыками, что позволяет нам выполнять широкий спектр услуг: от сложных web-сервисов, с применением блокчейн технологии до проектирования и производства радиоэлектроники. ',
  },
];

export const StabPortfolioWorks: IPortfolioWork[] = [
  {
    title: 'Test',
    description: 'Test',
    images: [
      {
        alt: 'Test',
        image: {
          name: '1_6ahbWjp_g9hqhaTDSJOL1Q.png',
        },
      },
    ],
  },
];

const StabStack: IStack[] = [
  {
    name: 'react.js',
  },
  {
    name: 'typescript',
  },
  {
    name: 'apollo',
  },
  {
    name: 'node.js',
  },
  {
    name: 'python',
  },
  {
    name: 'asyncio',
  },
  {
    name: 'mongodb',
  },
  {
    name: 'postgresql',
  },
  {
    name: 'elasticsearch',
  },
  {
    name: 'graphene',
  },
  {
    name: 'redis',
  },
  {
    name: 'go',
  },
  {
    name: 'docker',
  },
  {
    name: 'react native',
  },
  {
    name: 'java',
  },
];

const data: any = {
  sections: StabSections,
  services: StabServices,
  portfolioworks: StabPortfolioWorks,
  stacks: StabStack,
  contacts: [],
};
