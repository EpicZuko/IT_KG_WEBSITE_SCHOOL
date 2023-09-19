import image from '../../assets/image 11.svg'
import Aidar from '../../assets/puplisPhoto/aidar.jpg'
import Anarbu from '../../assets/puplisPhoto/anarbu.jpg'
import Azamat from '../../assets/puplisPhoto/azamat.jpg'
import Bektur from '../../assets/puplisPhoto/bektur.jpg'
import Daniel from '../../assets/puplisPhoto/daniel.jpg'
import Jumagul from '../../assets/puplisPhoto/jumagul.jpg'
import Kanat from '../../assets/puplisPhoto/kanat.jpg'
import Bilal from '../../assets/puplisPhoto/mee.jpg'
import Nazgul from '../../assets/puplisPhoto/nazgul.jpg'
import Talant from '../../assets/puplisPhoto/talant.jpg'
import Zulkainar from '../../assets/puplisPhoto/zulkainar.jpg'
import telephone from '../../assets/telephone.svg'
import About from '../../components/about/About'
// eslint-disable-next-line import/no-cycle
import AboutProject from '../../components/about/AboutProject'
import Cards from '../../components/card/Cards'
import Cardtages from '../../components/card/Cardtages'
import PupilsCard from '../../components/card/PupilsCard'
// eslint-disable-next-line import/no-cycle
import Slider from '../../components/UI/Slider'

export const URL_BASE =
   'http://ec2-3-71-206-206.eu-central-1.compute.amazonaws.com/'
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
      img: Talant,
      userName: 'Talant Badyshov',
      name: 'Директор ОФ "İT.KG"',
   },
   {
      id: 2,
      img: Azamat,
      userName: 'Azamat Muratov',
      name: 'Staff жетекчи инструктор Java, PM',
   },
   {
      id: 3,
      img: Bilal,
      userName: 'Bilal Baiitov',
      name: 'Жетекчи инструктор JavaScript, Devops frontend',
   },
   {
      id: 4,
      img: Zulkainar,
      userName: 'Zulkainar Kalilov',
      name: 'Жетекчи ментор JavaScript',
   },
   {
      id: 5,
      img: Daniel,
      userName: 'Daniel Ahadzhanov',
      name: 'Продукт ментор, ментор Java SE',
   },
   {
      id: 6,
      img: Anarbu,
      userName: 'Anarbu Amanbaeva',
      name: 'Инструктор JavaScript',
   },
   {
      id: 7,
      img: Bektur,
      userName: 'Bektur Hanazarov',
      name: 'Ментор Java Core',
   },
   {
      id: 8,
      img: Jumagul,
      userName: 'Jumagul Temishova',
      name: 'Ментор JavaScript',
   },
   {
      id: 9,
      img: Kanat,
      userName: 'Kanat Musaev',
      name: 'Ментор JavaScript',
   },
   {
      id: 10,
      img: Aidar,
      userName: 'Aidar Zhaparov',
      name: 'Инструктор Java, staff  жетекчинин орун басары',
   },
   {
      id: 11,
      img: Nazgul,
      userName: 'Nazgul Khanazarova',
      name: 'Менеджер',
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
      answer: 'Кочкор-Ата шаары. Тургенова көчөсү. Мед. колледж 3 этаж',
   },
   {
      question: 'Кабыл алуу үчүн кандай документтер талап кылынат?',
      answer: 'Кабы алуу үчүн паспорт же туулгандыгы жөнүндө күбөлүк керек',
   },
   {
      question: 'Кайсы багытты тандаарымды билбей калсамчы?',
      answer:
         'Инструктор кайсы багытты тандашыңызды түшүндүрүп жардам көрсөтөт',
   },
   {
      question:
         'Өзүндүн компьютериң/ноутбугуң сөзсүз болуусу керекпи же силер бересиңерби?',
      answer: 'Ар бир окучунун өзүнүн жеке ноутбуку болушу шарт',
   },
   {
      question: 'Программалоого кандай ноутбук керек?',
      answer:
         'Ноутбуктун брэнди,баасы,эски же жаңысы айырмасы жок. Эң башкысы программалоо үчүн ноутбуктун минималдуу параметрлери: Процессор: Corei5 же андан жогору, SSD: 256 ГБ, RAM: 8 ГБ же андан көп болуусу',
   },
   {
      question: 'Жашка чектөөлөр барбы?',
      answer: '15 жаштан баштап 55 жашка чейин билим алса болот',
   },
   {
      question: 'Сабак убакыттары канчада?',
      answer:
         'Сабак убактары күндүзү 15:00-17:00 гө чейин кечкиси 18:00-20:00 гө чейин',
   },
]
