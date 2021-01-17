import { Button, Select, Slider } from 'antd';
import React from 'react';
import {
    FilterContainer,
    Title,
    FilterBlock,
    CheckboxGroup,
    PriceAndFilterBlock,
    cityOptionsStyles,
    SelectStyled
} from './styled';
import { cities } from '../../data';
import 'antd/dist/antd.css';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { getCategoryOptions } from '../../helpers/filters';
import { FiltersContext } from '../../App';
import { SelectValue } from 'antd/es/select';

const { Option } = Select;

export const FiltersComponent: React.FC= () => {
    const { setFilters, filters } = React.useContext(FiltersContext);

    const [selectedCityId, setSelectedCityId] = React.useState(filters.selectedCityId);
    const [selectedCategoryIds, setSelectedCategoryIds] =
        React.useState<CheckboxValueType[]>(filters.selectedCategoryIds);
    const [priceRange, setPriceRange] = React.useState<[number, number]>(filters.priceRange);

    const categoryOptions = getCategoryOptions();

    const citiesOptions = cities.map(city => (
        <Option style={cityOptionsStyles} value={city.id} key={city.id} >{city.name}</Option>
    ));

    const onClickByFilterButton = React.useCallback(() => {
        setFilters({
            selectedCityId,
            selectedCategoryIds,
            priceRange
        });
    }, [setFilters, selectedCityId, selectedCategoryIds, priceRange])

    const onSelectCity = React.useCallback((value: SelectValue) => {
        // if value === '', need to replace to null for adding variable to locale storage
        setSelectedCityId(+value || null);
    }, [])

    return <FilterContainer>
        <FilterBlock>
            <Title>CITY</Title>
            <SelectStyled
                onChange={onSelectCity}
                showSearch
                size="large"
                placeholder="Select a city"
                value={selectedCityId ?? undefined} // value waiting for string, number or undefined type
                allowClear
            >
                {citiesOptions}
            </SelectStyled>
        </FilterBlock>
        <FilterBlock>
            <Title>CATEGORIES</Title>
            <CheckboxGroup
                options={categoryOptions}
                value={selectedCategoryIds}
                onChange={setSelectedCategoryIds}
            />
        </FilterBlock>
        <FilterBlock>
            <Title>PRICE</Title>
            <Slider range defaultValue={priceRange} onChange={setPriceRange} max={250} min={0}/>
            <PriceAndFilterBlock>
                <span>${priceRange[0]}&emsp;-&emsp;{priceRange[1]}</span>
                <Button onClick={onClickByFilterButton} type="primary">FILTER</Button>
            </PriceAndFilterBlock>
        </FilterBlock>
    </FilterContainer>
}