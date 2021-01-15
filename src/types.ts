import { CheckboxValueType } from 'antd/es/checkbox/Group';

export interface City {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Data {
    id: number;
    name: string;
    price: number;
    category: number;
    city: number;
}

export interface DataUI extends Data {
    categoryName: string;
    cityName: string;
}
export interface Filters {
    selectedCityId: number | null;
    selectedCategoryIds: CheckboxValueType[];
    priceRange: [number, number];
}

export interface CategoryOptions {
    label: JSX.Element;
    value: number;
}
