import image from '../../assets/image 11.svg'
import telephone from '../../assets/telephone.svg'
import About from '../../components/about/About'
// eslint-disable-next-line import/no-cycle
import AboutProject from '../../components/about/AboutProject'
import Cards from '../../components/card/Cards'
import Cardtages from '../../components/card/Cardtages'
import PupilsCard from '../../components/card/PupilsCard'
// eslint-disable-next-line import/no-cycle
import Slider from '../../components/UI/Slider'

export const sliderArray = [
   {
      id: 1,
      name: 'GIFT.ME',
      text: 'Gift.me – это веб-сервис, где пользователи могут размещать свои желаемые подарки и  делать подарки другим.',
      img: image,
      list: [
         {
            id: 1,
            name: '2 Проектных менеджера',
         },
         {
            id: 2,
            name: '2 UI-UX desiner',
         },
         {
            id: 3,
            name: '3 Front-end разработчика',
         },
         {
            id: 4,
            name: '2 Back-end разработчика',
         },
         {
            id: 5,
            name: '1 Тестировщик',
         },
      ],
   },
]
export const slider = [
   {
      id: 1,
      img: '',
      userName: 'Nazgul Nazgulovich',
      name: 'manager',
   },
   {
      id: 2,
      img: '',
      userName: 'Bilal Baitov',
      name: 'JavaScript instructor',
   },
   {
      id: 3,
      img: '',
      userName: 'Elmir Alisherov',
      name: 'Java mentor',
   },
   {
      id: 4,
      img: '',
      userName: 'Dastan Dastanovich',
      name: 'Java mentor',
   },
   {
      id: 5,
      img: '',
      userName: 'Daniel Danielovich',
      name: 'Java mentor',
   },
   {
      id: 6,
      img: '',
      userName: 'Azamat Muratov',
      name: '',
   },
   {
      id: 7,
      img: '',
      userName: 'Talant Badyshov',
      name: '',
   },
]

export const menuItems = [
   {
      id: 1,
      to: 'kurstar',
      title: 'Курстар',
   },
   {
      id: 2,
      to: 'about',
      title: 'Биз жөнүнүндө',
   },
   {
      id: 3,
      to: 'student',
      title: 'Студенттердин проекттери',
   },
   {
      id: 4,
      to: 'ourteam',
      title: 'Биздин команда',
   },
   {
      id: 5,
      to: '',
      title: 'Кабылдама',
   },

   {
      id: 6,
      to: 'phone',
      img: telephone,
      title: '0999444072',
   },
]
export const menuItemsStuructur = [
   {
      id: 1,
      to: 'kurstar',
      title: 'IT Курстар',
      page: <Cards />,
   },
   {
      id: 2,
      to: '',
      title: '',
      page: <PupilsCard />,
   },
   {
      id: 3,
      to: '',
      title: '',
      page: <Cardtages />,
   },
   {
      id: 4,
      to: 'about',
      title: 'Биз жөнүнүндө',
      page: <About />,
   },
   {
      id: 5,
      to: 'student',
      title: 'Студенттердин проекттери',
      page: <AboutProject />,
   },

   {
      id: 6,
      to: 'ourteam',
      title: 'Биздин команда',
      page: <Slider />,
   },
   {
      id: 7,
      to: 'phone',
      img: '',
      title: '0999444072',
      page: '',
   },
]

export const data = [
   {
      question: 'Кампус кайсыл жакта жайгашкан?',
      answer: '',
   },
   {
      question: 'Кабыл алуу үчүн кандай документтер талап кылынат?',
      answer:
         'Ноутбуктун брэнди,баасы,эски же жаңысы айырмасы жок. Эң башкысы программалоо үчүн ноутбуктун минималдуу параметрлери: Процессор: Corei5 же андан жогору, SSD: 256 ГБ, RAM: 8 ГБ же андан көп болуусу',
   },
   {
      question: 'Кайсы багытты тандаарымды билбей калсамчы?',
      answer: '',
   },
   {
      question:
         'Өзүндүн компьютериң/ноутбугуң сөзсүз болуусу керекпи же силер бересиңерби?',
      answer:
         'Ноутбуктун брэнди,баасы,эски же жаңысы айырмасы жок. Эң башкысы программалоо үчүн ноутбуктун минималдуу параметрлери: Процессор: Corei5 же андан жогору, SSD: 256 ГБ, RAM: 8 ГБ же андан көп болуусу',
   },
   {
      question: 'Программалоого кандай ноутбук керек?',
      answer: '',
   },
   {
      question: 'Жашка чектөөлөр барбы?',
      answer: 'Мы обучаем от 15 лет и выше без ограничений',
   },
   {
      question: 'Сабак убакыттары канчада?',
      answer: 'Мы обучаем от 15 лет и выше без ограничений',
   },
   {
      question: 'Программалоого кандай ноутбук керек?',
      answer: 'Мы обучаем от 15 лет и выше без ограничений',
   },
]
