import { Col, Row } from 'antd';
import React from 'react';
import { FiltersContext } from '../../App';
import { getFilteredData } from '../../helpers/filters';
import { DataUI } from '../../types';
import { CardStyled, CardInfo, EmptyStyled, RowStyled } from './styled';
import 'antd/dist/antd.css';
import img from '../../img/img.png';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';

export const Cards: React.FC = () => {
    const { filters } = React.useContext(FiltersContext);
    const [filteredData, setFilteredData] = React.useState<DataUI[]>([]);

    React.useEffect(() => {
        setFilteredData(getFilteredData(filters));
    }, [filters]);

    const getCardImg = (index: number): JSX.Element => (
        <img src={(!(index % 3) && img2) || (!(index % 2) && img) || img1} alt="img"/>
    );

    const getCardDescription = (item: DataUI): JSX.Element => (
        <div>
            {item.categoryName}
            <span id="price">{item.price}$</span>
        </div>
    );

    return filteredData?.length ? (
        <RowStyled gutter={24} wrap >
            {filteredData.map((item, index) => (
                <Col
                    key={item.id}
                    span={6}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                >
                    <CardStyled city={item.cityName} hoverable cover={getCardImg(index)}>
                        <CardInfo title={item.name} description={getCardDescription(item)}/>
                    </CardStyled>
                </Col>
            ))}
        </RowStyled>
    ) : (
        <EmptyStyled />
    );
};
