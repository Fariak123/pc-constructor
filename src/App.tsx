import Label from "./components/Label.tsx";
import CardOptions from "./components/CardOptions.tsx";
import ExtraInfo from "./components/ExtraInfo.tsx";

function App() {
    return (
        <div className="min-h-screen w-full bg-white text-gray-900">
            <Label/>
            <CardOptions/>
            <ExtraInfo/>
            <footer className="bg-gray-900 text-white text-sm py-6 px-4 text-center">
                <p>© 2025 ПК Конструктор. Все права защищены.</p>
            </footer>
        </div>
    )
}

export default App
