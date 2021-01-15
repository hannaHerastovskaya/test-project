import styled from 'styled-components';
import { Checkbox } from "antd";

export const FilterContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-size: 18px;
    color: #33363e;
    font-weight: 700;
    font-family: 'Montserrat';
    margin-bottom: 30px;
`;

export const FilterBlock = styled.div`
    margin: 0 40px 40px 0;
    display: flex;
    flex-direction: column;
    height: max-content;
`;

export const PriceAndFilterBlock = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 16px;
    color: #33363e;
    font-weight: 400;
    font-family: "Montserrat";
    & button {
        width: 100px;
        height: 35px;
    }
`;

export const CheckboxGroup = styled(Checkbox.Group)`
    display: flex;
    flex-direction: column;
    height: max-content;
    justify-content: center;
    font-size: 15px;
    color: #4c505b;
    font-weight: 400;
    font-family: "Raleway";
    .ant-checkbox-inner {
        width: 18px;
        height: 18px;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: rgba(76,80,91,0);
      &::after{
        border: 2px solid #1cb8ff;
        border-top: 0;
        border-left: 0;
      }
    }
    .ant-checkbox-group-item {
        margin-bottom: 12px;
        & > span > label > span {
          color: rgba(0, 0, 0, 0.4);
          color: #a6a9af;
          font-size: 15px;
          font-weight: 400;
          font-family: "Open Sans";
        }
    }
    & :last-child {
        margin-bottom: 0;
    }
`;

export const cityOptionsStyles = {fontSize: 15, color: '#4c505b', fontFamily: "Raleway"};