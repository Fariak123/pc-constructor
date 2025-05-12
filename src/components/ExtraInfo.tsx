function ExtraInfo() {
    return (
        <>
            <section className="bg-gray-50 py-12 px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Как мы подбираем комплектующие</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        {title: "Анализ потребностей", desc: "Определяем приоритетные задачи для компьютера."},
                        {title: "Оптимизация бюджета", desc: "Баланс между ценой и производительностью."},
                        {title: "Совместимость", desc: "Проверка стабильной работы всех компонентов."}
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-white rounded shadow">
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-12 px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Особенности нашего подхода</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        {label: "Актуальные компоненты", description: "Мы следим за новинками рынка и предлагаем только актуальные и доступные комплектующие"},
                        {label: "Ориентация на задачи", description: "Подбираем компоненты, исходя из реальных потребностей, а не маркетинговых материалов"},
                        {label: "Проверка совместимости", description: "Все конфигурации проверены на совместимость компонентов между собой"},
                        {label: "Учёт будущих обновлений", description: "Предлагаем конфигурации с возможностью апгрейда в будущем"},
                    ].map((feature, i) => (
                        <div key={i} className="bg-purple-50 p-4 rounded shadow">
                            <p className="text-sm">✔ {feature.label}</p>
                            <p className="text-sm font-bold text-gray-400 pl-4">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
                <div className="space-y-6">
                    {[
                        {
                            q: "Могу ли я использовать конфигурацию игрового ПК для работы?",
                            a: "Да, но можно оптимизировать под задачи и сэкономить."
                        },
                        {
                            q: "Какие компоненты важнее всего для определенных задач?",
                            a: "Для игр — видеокарта и процессор, для работы — ОЗУ и SSD."
                        },
                        {
                            q: "Стоит ли переплачивать за топовые комплектующие?",
                            a: "Зависит от задач. Не всегда прирост производительности стоит переплаты."
                        }
                    ].map((faq, i) => (
                        <div key={i} className="">
                            <h3 className="font-semibold text-lg mb-1">{faq.q}</h3>
                            <p className="text-sm font-bold text-gray-400">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-purple-600 text-white py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Готовы собрать свой идеальный ПК?</h2>
                <p className="mb-6">Выберите категорию выше или получите консультацию</p>
                <button className="bg-white py-2 text-purple-500 px-6 rounded font-semibold hover:bg-gray-100">
                    Получить консультацию
                </button>
            </section>
        </>
    )
}

export default ExtraInfo