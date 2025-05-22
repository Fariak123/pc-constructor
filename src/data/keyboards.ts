import type {Keyboard} from "../types";
import f1 from './images/logitech-g915.webp'
import f2 from './images/Keychron-K2.webp'
import f3 from './images/hyperx-origins.webp'
import f4 from './images/ducky-one2mini.webp'
import f5 from './images/razer-blackwidow.webp'
import f6 from './images/apple-magic.jpeg'
import f7 from './images/microsoft-ergonomic.jpg'
import f8 from './images/apex-pro.webp'
import f9 from './images/akko-3068b.jpg'
import f10 from './images/rk61.webp'


export const keyboards: Keyboard[] = [
    {
        id: "1",
        name: "Logitech G915 TKL",
        image: f1,
        price: 14990,
        type: "Без цифрового блока",
        purpose: "Игровая",
        tags: ["Механическая", "Беспроводная", "Подсветка"],
        features: [
            "Низкопрофильные переключатели GL",
            "Беспроводное подключение LIGHTSPEED",
            "RGB-подсветка LIGHTSYNC"
        ]
    },
    {
        id: "2",
        name: "Keychron K2",
        image: f2,
        price: 7490,
        type: "75%",
        purpose: "Для программирования",
        tags: ["Механическая", "Беспроводная", "Подсветка"],
        features: [
            "Переключатели Gateron Red/Blue/Brown",
            "Bluetooth и USB-C",
            "Белая или RGB-подсветка"
        ]
    },
    {
        id: "3",
        name: "HyperX Alloy Origins Core",
        image: f3,
        price: 8990,
        type: "Без цифрового блока",
        purpose: "Игровая",
        tags: ["Механическая", "Подсветка"],
        features: [
            "Фирменные переключатели HyperX",
            "Алюминиевый корпус",
            "RGB-подсветка с эффектами"
        ]
    },
    {
        id: "4",
        name: "Ducky One 2 Mini",
        image: f4,
        price: 9490,
        type: "Компактная",
        purpose: "Игровая",
        tags: ["Механическая", "Подсветка"],
        features: [
            "Переключатели Cherry MX",
            "Компактный 60% форм-фактор",
            "Двухслойные колпачки PBT"
        ]
    },
    {
        id: "5",
        name: "Razer BlackWidow V3",
        image: f5,
        price: 11990,
        type: "Полноразмерная",
        purpose: "Игровая",
        tags: ["Механическая", "Подсветка"],
        features: [
            "Переключатели Razer Green/Yellow",
            "Подсветка Razer Chroma RGB",
            "Мультимедийные клавиши"
        ]
    },
    {
        id: "6",
        name: "Apple Magic Keyboard",
        image: f6,
        price: 8990,
        type: "Компактная",
        purpose: "Офисная",
        tags: ["Беспроводная"],
        features: [
            "Низкопрофильные ножничные переключатели",
            "Подключение по Bluetooth",
            "Встроенный аккумулятор"
        ]
    },
    {
        id: "7",
        name: "Microsoft Ergonomic Keyboard",
        image: f7,
        price: 4990,
        type: "Полноразмерная",
        purpose: "Офисная",
        tags: [],
        features: [
            "Эргономичный дизайн",
            "Подставка для запястий",
            "Мультимедийные клавиши"
        ]
    },
    {
        id: "8",
        name: "SteelSeries Apex Pro",
        image: f8,
        price: 15990,
        type: "Полноразмерная",
        purpose: "Игровая",
        tags: ["Механическая", "Подсветка"],
        features: [
            "Настраиваемые переключатели OmniPoint",
            "RGB-подсветка",
            "Алюминиевый корпус"
        ]
    },
    {
        id: "9",
        name: "Akko 3068B Plus",
        image: f9,
        price: 7290,
        type: "65%",
        purpose: "Для программирования",
        tags: ["Механическая", "Беспроводная", "Подсветка"],
        features: [
            "Собственные переключатели Akko",
            "Подключение Bluetooth/2.4GHz/USB-C",
            "RGB-подсветка"
        ]
    },
    {
        id: "10",
        name: "Royal Kludge RK61",
        image: f10,
        price: 5490,
        type: "Компактная",
        purpose: "Игровая",
        tags: ["Механическая", "Беспроводная", "Подсветка"],
        features: [
            "Горячая замена переключателей",
            "Подключение по Bluetooth и USB-C",
            "RGB-подсветка"
        ]
    }
];

