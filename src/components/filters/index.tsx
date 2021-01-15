import { Button, Select, Slider } from 'antd';
import React from 'react';
import {FilterContainer, Title, FilterBlock, CheckboxGroup, PriceAndFilterBlock, cityOptionsStyles} from './styled';
import { cities } from '../../data';
import 'antd/dist/antd.css';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { getCategoryOptions } from '../../helpers/filters';
import { FiltersContext } from '../../App';

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

    return <FilterContainer>
        <FilterBlock>
            <Title>CITY</Title>
            <Select
                showSearch
                style={{ width: 240, ...cityOptionsStyles }}
                size="large"
                placeholder="Select a city"
                value={selectedCityId ?? undefined}
                onChange={setSelectedCityId}
                allowClear
            >
                {citiesOptions}
            </Select>
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