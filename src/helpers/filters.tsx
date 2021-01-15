import { data, categories, cities } from '../data';
import { Category, CategoryOptions, City, DataUI, Filters } from '../types';

const countOfDataByCategory = (categoryId: number) =>
    data.filter(d => d.category === categoryId).length;

export const getCategoryOptions = (): CategoryOptions[] =>
    categories.map(({ id, name }) => ({
        label: (
            <label>
                {name}
                <span>{` (${countOfDataByCategory(id)})`}</span>
            </label>
        ),
        value: id,
    }));

const fromArrayToMap = <T extends { id: number }>(array: T[]) =>
    array.reduce<{ [id: number]: T }>(
        (acc, curr) => ({
            ...acc,
            [curr.id]: curr,
        }),
        {}
    );

export const getFilteredData = ({
    selectedCategoryIds,
    priceRange,
    selectedCityId,
}: Filters): DataUI[] => {
    const cityMap = fromArrayToMap<City>(cities);
    const categoriesMap = fromArrayToMap<Category>(categories);
    return data.reduce<DataUI[]>((acc, item) => {
        const filters =
            (!selectedCityId || selectedCityId === item.city) &&
            priceRange[0] <= item.price &&
            item.price <= priceRange[1] &&
            (!selectedCategoryIds.length ||
                selectedCategoryIds.includes(item.category));
        if (filters) {
            return [
                ...acc,
                {
                    ...item,
                    cityName: cityMap[item.city].name,
                    categoryName: categoriesMap[item.category].name,
                },
            ];
        }
        return acc;
    }, []);
};
