import React from 'react';
import { usePagination, DOTS } from 'hooks/usePagination';
import styled from 'styled-components';
import left from 'assets/icons/left.svg';
import right from 'assets/icons/right.svg';
const StyledPagination = styled.div`
  .pagination-container {
    display: flex;
    list-style-type: none;
    border: 1px solid #ededf4;

    .pagination-item {
      padding-left: 14px;
      height: 42px;
      text-align: right;
      margin: auto 4px;
      color: #4d4d4f;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      letter-spacing: 0.01071em;
      border-radius: 2px;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      width: 42px;
      position: relative;
      &.dots:hover {
        background-color: transparent;
        cursor: default;
        border-radius: 2px;
      }
      &:hover {
        background-color: #009cb4;
        color: #fff;
        cursor: pointer;
      }
      &.selected {
        background-color: #009cb4;
        color: #fff;
      }
      .arrow {
        position: absolute;
        width: 20px;
        height: 11px;
        background-size: contain;
        cursor: pointer;
        &.left {
          background: url(${left}) no-repeat center;
          left: 10px;
          &::before {
            position: absolute;
            content: '';
            left: 6px;
            width: 20px;
            height: 11px;
            background-size: contain;
            background: url(${left}) no-repeat center;
          }
          &::after {
            position: absolute;
            content: '';
            width: 20px;
            height: 11px;
            background-size: contain;
            background: url(${left}) no-repeat center;
          }
        }
        &.right {
          background: url(${right}) no-repeat center;
          left: 8px;
          &::before {
            position: absolute;
            content: '';
            left: 6px;
            width: 20px;
            height: 11px;
            background-size: contain;
            background: url(${right}) no-repeat center;
          }
          &::after {
            position: absolute;
            content: '';
            width: 20px;
            height: 11px;
            background-size: contain;
            background: url(${right}) no-repeat center;
          }
        }
      }
      &.disabled {
        s .arrow::before {
          background: url(${left}) no-repeat center;
          cursor: pointer;
        }
        &:hover {
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`;

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <StyledPagination>
      <ul className={'pagination-container'}>
        <li
          className={`pagination-item ${currentPage === 1 ? ' disabled' : ''}`}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              className={`pagination-item ${
                currentPage === pageNumber ? ' selected' : ''
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={`pagination-item ${
            currentPage === lastPage ? ' disabled' : ''
          }`}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
