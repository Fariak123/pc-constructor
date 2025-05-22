// export default function FilterPanel() {
//     return (
//         <div className="p-4 flex flex-col gap-4 w-60">
//             <select className="p-2 border rounded">
//                 <option>Выберите тип</option>
//                 <option>Полноразмерная</option>
//                 <option>75%</option>
//                 <option>65%</option>
//                 <option>Компактная</option>
//                 <option>Без цифрового блока</option>
//             </select>
//             <select className="p-2 border rounded">
//                 <option>Выберите назначение</option>
//                 <option>Игровая</option>
//                 <option>Офисная</option>
//                 <option>Для программирования</option>
//             </select>
//             <div className="flex flex-col gap-2">
//                 <label><input type="checkbox" /> Подсветка</label>
//                 <label><input type="checkbox" /> Беспроводная</label>
//                 <label><input type="checkbox" /> Механическая</label>
//             </div>
//             <button className="bg-gray-200 rounded py-1">Сбросить фильтры</button>
//         </div>
//     );
// }

import React from "react";
import type {FilterState} from "../App.tsx";

interface FilterPanelProps {
    filters: FilterState;
    setFilters: (filters: FilterState) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
    const updateFilter = (key: string, value: any) => {
        setFilters({ ...filters, [key]: value });
    };

    return (
        <div className="border rounded p-4 flex flex-col gap-4 w-60">
            <select
                value={filters.type}
                onChange={e => updateFilter("type", e.target.value)}
                className="p-2 border rounded"
            >
                <option value="">Тип клавиатуры</option>
                <option value="Полноразмерная">Полноразмерная</option>
                <option value="65%">65%</option>
                <option value="75%">75%</option>
                <option value="Без цифрового блока">Без цифрового блока</option>
                <option value="Компактная">Компактная</option>
            </select>

            <select
                value={filters.purpose}
                onChange={e => updateFilter("purpose", e.target.value)}
                className="p-2 border rounded"
            >
                <option value="">Назначение</option>
                <option value="Игровая">Игровая</option>
                <option value="Офисная">Офисная</option>
                <option value="Для программирования">Для программирования</option>
            </select>

            <button
                onClick={() => setFilters({ type: "", purpose: "", mechanical: false, backlit: false, wireless: false })}
                className="text-sm bg-gray-200 rounded py-1"
            >
                Сбросить фильтры
            </button>
        </div>
    );
};

export default FilterPanel;

