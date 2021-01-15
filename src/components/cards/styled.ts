import styled from 'styled-components';
import { Card, Empty } from 'antd';

export const CardStyled = styled(Card)<{ city: string }>`
    min-width: 150px;
    margin-bottom: 30px;
    height: calc(100% - 30px);
    .ant-card-body {
        position: relative;
    }
    .ant-card-body::before {
        content: "${p => p.city}";
        top: -30px;
        position: absolute;
        font-size: 13px;
        letter-spacing: 0;
        line-height: 22px;
        color: #ffffff;
        font-weight: 500;
        font-family: "Raleway";
    }
`;

export const CardInfo = styled(Card.Meta)`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  font-family: "Montserrat";
  .ant-card-meta-title {
    letter-spacing: 0px;
    color: #33363e;
  }
  .ant-card-meta-description > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 13px;
    letter-spacing: 0;
    color: #a6a9af;
    font-weight: 500;
    font-family: "Raleway";

    #price {
      color: #282d3b;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      font-family: "Montserrat";
    }
  }
`;

export const EmptyStyled = styled(Empty)`
    margin: auto;
    font-size: 15px;
    color: #4c505b;
    font-weight: 400;
    font-family: "Raleway";
`