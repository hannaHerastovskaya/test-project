import React from 'react';
import { FiltersComponent } from './components/filters';
import { Cards } from './components/cards';

import 'antd/dist/antd.css';
import { filtersByDefault } from './data';
import { Filters } from './types';
import { Main } from './styled';


export const FiltersContext = React.createContext<{
    filters: Filters,
    setFilters: (filters: Filters) => void
}>({
    filters: filtersByDefault,
    setFilters: () => {},
});

export const App: React.FC = () => {
    const initialSelectedCityId = localStorage.getItem('selectedCityId');
    const initialSelectedCategoryIds = localStorage.getItem('selectedCategoryIds');
    const initialPriceRange = localStorage.getItem('priceRange');

    const [filters, setFilters] = React.useState({
        selectedCityId: initialSelectedCityId && JSON.parse(initialSelectedCityId),
        selectedCategoryIds: initialSelectedCategoryIds ? JSON.parse(initialSelectedCategoryIds) : [],
        priceRange: initialPriceRange ? JSON.parse(initialPriceRange) : [0, 250],
    });

    React.useEffect(() => {
        const { selectedCityId, selectedCategoryIds, priceRange } = filters;
        localStorage.setItem('selectedCityId', selectedCityId || null)
        localStorage.setItem('selectedCategoryIds', JSON.stringify(selectedCategoryIds))
        localStorage.setItem('priceRange', JSON.stringify(priceRange))
    }, [filters]);

    return (
        <Main>
            <FiltersContext.Provider value={{ filters, setFilters }}>
                <FiltersComponent />
                <Cards />
            </FiltersContext.Provider>
        </Main>
    );
}