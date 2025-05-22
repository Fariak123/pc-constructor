import { keyboards } from "./data/keyboards";
import FilterPanel from "./components/FilterPanel";
import React, {useState} from "react";
import type {Keyboard} from "./types";


interface CompareModalProps {
    keyboards: Keyboard[];
    onClose: () => void;
    onRemove: (keyboard: Keyboard) => void;
}

export interface FilterState {
    type: string;
    purpose: string;
    mechanical: boolean;
    backlit: boolean;
    wireless: boolean;
}

function App() {
    const [showCompare, setShowCompare] = useState(false);
    const [compareList, setCompareList] = useState<Keyboard[]>([])

    const removeFromCompare = (keyboard: Keyboard) => {
        setCompareList(prev => prev.filter(kb => kb !== keyboard));
    };

    function split(arr: Keyboard[], search: Keyboard) {
        const temp = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != search) {
                temp.push(arr[i]);
            }
        }
        return temp;
    }

    const [filters, setFilters] = useState<FilterState>({
        type: "",
        purpose: "",
        mechanical: false,
        backlit: false,
        wireless: false
    });

    const filteredKeyboards = keyboards.filter(kb => {
        return (
            (!filters.type || kb.type === filters.type) &&
            (!filters.purpose || kb.purpose === filters.purpose)
        );
    });

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
            {showCompare && (
                <CompareModal keyboards={compareList} onClose={() => setShowCompare(!showCompare)} onRemove={removeFromCompare} />
            )}
            <div className={'flex place-content-between'}>
                <h1 className="text-3xl font-bold text-purple-600">KeyboardFinder</h1>
                <button onClick={() => compareList.length != 0 ? setShowCompare(!showCompare) : setShowCompare(false)}>{'Сравнить '}{'('}{compareList.length}{')'}</button>
            </div>
            <div className="flex gap-6 pt-10">
                <FilterPanel filters={filters} setFilters={setFilters}/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-[400px]">
                    {filteredKeyboards.map(keyboard => (
                        <div key={keyboard.id} className="border rounded-lg shadow-md p-4 flex flex-col gap-2">
                            <img src={keyboard.image} alt={keyboard.name} className="h-32 object-contain"/>
                            <h3 className="font-semibold">{keyboard.name}</h3>
                            <p className="text-sm text-gray-500">{keyboard.type} — {keyboard.purpose}</p>
                            <div className="flex gap-2 flex-wrap">
                                {keyboard.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="font-bold text-purple-600">{keyboard.price.toLocaleString()} ₽</p>
                            {compareList.includes(keyboard) ? (
                                <button onClick={() => setCompareList(split(compareList, keyboard))}
                                        className="mt-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                    - Убрать
                                </button>
                            ) : (
                                <button onClick={() => setCompareList([keyboard, ...compareList])}
                                        className="mt-auto bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
                                    + Сравнить
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

const CompareModal: React.FC<CompareModalProps> = ({ keyboards, onClose, onRemove }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="w-full max-w-4xl bg-white h-full overflow-y-auto p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Сравнение клавиатур</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black text-lg">✕</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {keyboards.map((kb) => (
                        <div key={kb.id} className="border rounded-lg p-4 shadow min-w-[400px]">
                            <div className="flex justify-between">
                                <img src={kb.image} alt={kb.name} className="w-48 h-28 object-contain mb-2"/>
                                <button className={'mb-24'} onClick={() => onRemove(kb)}>✕</button>
                            </div>
                            <h3 className="font-semibold text-lg">{kb.name}</h3>
                            <p className="text-purple-700 font-bold">{kb.price.toLocaleString()} ₽</p>
                            <div className="mt-2 text-sm text-gray-700 space-y-1">
                                <p><strong>Тип:</strong> {kb.type}</p>
                                <p><strong>Назначение:</strong> {kb.purpose}</p>
                                <p><strong>Механическая:</strong> {kb.tags.includes('Механическая') ? "Да" : "Нет"}</p>
                                <p><strong>Подсветка:</strong> {kb.tags.includes('Подсветка') ? "Да" : "Нет"}</p>
                                <p><strong>Беспроводная:</strong> {kb.tags.includes('Беспроводная') ? "Да" : "Нет"}</p>
                            </div>
                            <div className="mt-3">
                                <h4 className="font-medium mb-1">Особенности:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    {kb.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};