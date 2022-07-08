import React from 'react';
import styled from 'styled-components';
import { Columns, Rows } from 'types/types';
import arrow from 'assets/icons/arrow.svg';
import { Documents } from 'types/types';

const TableStyle = styled.table`
  margin-left: 10px;
  &.register {
    th:nth-child(-n + 2) {
      padding-left: 20px;
      position: relative;
      &:before {
        position: absolute;
        content: '';
        left: -15px;
        top: 39px;
        width: 24px;
        height: 24px;
        background: url(${arrow}) no-repeat center;
      }
    }
    & .title-table {
      text-align: left;
      cursor: pointer;
      & th {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #009cb4;
        padding: 20px;
        padding-right: 60px;
        &:last-child {
          padding-right: 0px;
        }
        &:first-child {
          padding-right: 85px;
        }
      }
    }
    & td {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      padding: 20px;
      color: #4d4d4f;

      & a,
      span {
        color: #009cb4;
        text-decoration: underline;
      }
      & span {
        display: block;
      }
    }
    tr {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        background-color: #ededf4;
      }
    }
  }
`;
interface TableProps {
  columns: Columns[];
  data: Rows[] | Documents;
  className: string;
}

const Table: React.FC<TableProps> = ({ columns, data, className }) => {
  return (
    <TableStyle className={className}>
      <thead>
        <tr className="title-table">
          {columns.map((column) => (
            <th key={column.id}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => {
          if (row.adress) {
            return (
              <tr key={i}>
                {Object.values(row)
                  .slice(1)
                  .map((cell, i, array) => {
                    if (i == array.length - 1) {
                      return (
                        <td key={i}>
                          <a href={cell}>Ссылка </a>
                        </td>
                      );
                    }
                    return <td key={i}>{cell}</td>;
                  })}
              </tr>
            );
          }
          if (row.link) {
            return (
              <tr key={i}>
                {Object.values(row)
                  .slice(1)
                  .map((cell, i, array) => {
                    if (i == array.length - 1) {
                      return (
                        <td key={i}>
                          <a href={cell} download={cell} target="_blank">
                            Скачать
                          </a>
                          <span>(4.69 Мб)</span>
                        </td>
                      );
                    }
                    return <td key={i}>{cell}</td>;
                  })}
              </tr>
            );
          }
        })}
      </tbody>
    </TableStyle>
  );
};
export default Table;
