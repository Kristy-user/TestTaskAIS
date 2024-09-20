import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Columns, Rows, Documents} from '../../../../../types/types';
import arrow from 'assets/icons/arrow.svg';
import {safeAssign} from "@reduxjs/toolkit/dist/query/tsHelpers";

const TableStyle = styled.table`
  margin-left: 10px;
  min-height: 200px;

  &.register {
    th:first-child {
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
      text-align: justify;
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

      & a {
        color: #009cb4;

        &:hover {
          text-decoration: underline;
        }
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
  data: Rows[] | Documents[];
  className: string;
  error: string;
  loading: boolean
}

const Table: React.FC<TableProps> = ({columns, data, className, error, loading}) => {
  const isRowData = (data: any): data is Rows[] => {
    return data.length > 0 && 'address' in data[0];
  };

  const isDocumentData = (data: any): data is Documents[] => {
    return data.length > 0 && 'link' in data[0];
  };

  const [tableData, setTableData] = useState<Rows[]>(isRowData(data) ? data : []);

  useEffect(() => {
    isRowData(data) ?
      setTableData(data) : null
  }, [data]);
  const handleRegisterSort = (value: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    if (value.target && value.currentTarget.id == "number") {
      const direction = tableData[0].number === '#1' ? 'down' : 'up'
      const sortedTableData = [...tableData].sort((a, b) => {
        const numA = parseInt(a.number.replace('#', ''), 10);
        const numB = parseInt(b.number.replace('#', ''), 10);
        return direction === "up" ? numA - numB : numB - numA;
      });
      setTableData(sortedTableData);
    }
  }

  return (
    <TableStyle className={className}>
      <thead>
      <tr className="title-table">
        {columns.map((column) => (
          <th id={column.accessor} key={column.id} onClick={handleRegisterSort}>{column.header}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {loading ? (<tr>
        <td colSpan={columns.length} style={{textAlign: 'center'}}>
          Загрузка
        </td>
      </tr>) : error ? (<tr>
          <td colSpan={columns.length} style={{textAlign: 'center'}}>
            {error}
          </td>
        </tr>) :
        isRowData(data) ? (
          tableData.map((row, i) => (
            <tr key={i}>
              {Object.values(row)
                .slice(1) // Skip the first value if needed (like `id`)
                .map((cell, j, array) => {
                  if (j === array.length - 1) {
                    return (
                      <td key={j}>
                        <a href={cell}>Ссылка</a>
                      </td>
                    );
                  }
                  return <td key={j}>{cell}</td>;
                })}
            </tr>
          ))
        ) : isDocumentData(data) ? (
          data.map((row, i) => (
            <tr key={i}>
              {Object.values(row)
                .slice(1) // Skip the first value if needed
                .map((cell, j, array) => {
                  if (j === array.length - 1) {
                    return (
                      <td key={j} className="load">
                        <a href={cell} download={cell} target="_blank">
                          Скачать
                        </a>
                        <p>({(4.69 + Math.random()).toFixed(2)} Мб)</p>
                      </td>
                    );
                  }
                  return <td key={j}>{cell}</td>;
                })}
            </tr>
          ))
        ) : (<tr>
          <td colSpan={columns.length} style={{textAlign: 'center'}}>
            Данные не были найденыы
          </td>
        </tr>)}
      </tbody>
    </TableStyle>
  );
};
export default Table;
