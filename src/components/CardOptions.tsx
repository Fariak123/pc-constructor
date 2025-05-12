import {useState} from "react";

type Category = "gaming" | "work" | "designing" | "studying";

type PCBuild = {
    title: string;
    price: string;
    specs: string[];
    highlighted?: boolean;
};

function CardOptions() {
    const [category, setCategory] = useState<Category>("gaming");
    const categories: Category[] = ["gaming", "work", "designing", "studying"];
    const builds: Record<Category, PCBuild[]> = {
        gaming: [
            {
                title: "Базовый игровой ПК",
                price: "от 60 000 ₽",
                specs: [
                    "AMD Ryzen 5 5600X / Intel Core i5-11400F",
                    "NVIDIA GeForce GTX 1660 Super",
                    "16 GB DDR4"
                ],
                highlighted: false
            },
            {
                title: "Продвинутый игровой ПК",
                price: "от 120 000 ₽",
                specs: [
                    "AMD Ryzen 7 5800X3D / Intel Core i7-12700K",
                    "NVIDIA GeForce RTX 3070 Ti",
                    "32 GB DDR4"
                ],
                highlighted: true
            },
            {
                title: "Мощный игровой ПК",
                price: "от 200 000 ₽",
                specs: [
                    "AMD Ryzen 9 7950X / Intel Core i9-13900K",
                    "NVIDIA GeForce RTX 4080",
                    "32 GB DDR5"
                ],
                highlighted: false
            }
        ],
        work: [
            {
                title: "Офисный ПК",
                price: "от 40 000 ₽",
                specs: [
                    "AMD Ryzen 3 4100 / Intel Core i3-12100",
                    "Интегрированная графика",
                    "8 GB DDR4"
                ],
                highlighted: false
            },
            {
                title: "Рабочая станция",
                price: "от 90 000 ₽",
                specs: [
                    "AMD Ryzen 7 5700X / Intel Core i5-12600K",
                    "NVIDIA GeForce RTX 3060",
                    "32 GB DDR4"
                ],
                highlighted: true
            },
            {
                title: "Профессиональная станция",
                price: "от 180 000 ₽",
                specs: [
                    "AMD Ryzen 9 7900X / Intel Core i9-12900K",
                    "NVIDIA RTX A4000",
                    "64 GB DDR5"
                ],
                highlighted: false
            }
        ],
        designing: [
            {
                title: "Базовый для дизайна",
                price: "от 80 000 ₽",
                specs: [
                    "AMD Ryzen 5 5600X / Intel Core i5-12400",
                    "NVIDIA GeForce RTX 3060",
                    "16 GB DDR4"
                ],
                highlighted: false
            },
            {
                title: "Станция для 3D",
                price: "от 150 000 ₽",
                specs: [
                    "AMD Ryzen 9 5900X / Intel Core i7-12700K",
                    "NVIDIA GeForce RTX 3080",
                    "32 GB DDR4"
                ],
                highlighted: true
            },
            {
                title: "Профессиональный для VFX",
                price: "от 250 000 ₽",
                specs: [
                    "AMD Threadripper Pro / Intel Xeon W",
                    "NVIDIA RTX A5000",
                    "128 GB DDR5 ECC"
                ],
                highlighted: false
            }
        ],
        studying: [
            {
                title: "Учебный ПК",
                price: "от 35 000 ₽",
                specs: [
                    "AMD Ryzen 3 3300X / Intel Core i3-10100",
                    "Интегрированная графика",
                    "8 GB DDR4"
                ],
                highlighted: false
            },
            {
                title: "Для студентов ИТ",
                price: "от 70 000 ₽",
                specs: [
                    "AMD Ryzen 5 5600G / Intel Core i5-11600K",
                    "NVIDIA GeForce GTX 1660 Super",
                    "16 GB DDR4"
                ],
                highlighted: true
            },
            {
                title: "Универсальный",
                price: "от 100 000 ₽",
                specs: [
                    "AMD Ryzen 7 5700X / Intel Core i7-11700",
                    "NVIDIA GeForce RTX 3060 Ti",
                    "32 GB DDR4"
                ],
                highlighted: false
            }
        ]
    }

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Для каких задач вам нужен компьютер?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 justify-items-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`py-2 px-4 rounded border font-medium capitalize transition h-18 w-50 ${
                            category === cat ? "bg-purple-600 text-white border-purple-600" : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {builds[category].map((item, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow border ${
                            item.highlighted ? "bg-purple-100 border-purple-600" : "bg-white border-gray-200"
                        }`}
                    >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-lg font-bold mb-4">{item.price}</p>
                        <ul className="text-sm space-y-1 mb-4">
                            {item.specs.map((spec, i) => (
                                <li key={i}>✔ {spec}</li>
                            ))}
                        </ul>
                        <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800">Подробнее
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardOptions