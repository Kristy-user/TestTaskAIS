import React from 'react';
import {usePagination, DOTS, PaginationTypes} from '../hooks/usePagination';
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

      &:last-child, &:first-child {
        padding-left: 0;
      }

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

      .arrow-block {
        display: flex;

        & .arrow {
          border: solid black;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 3px;
          &:last-child {
            margin-left: 8px;
          }

          &.left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }

          &.right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
          }
        }
      }
      &.disabled {
        .arrow-block > .arrow {
          border: solid gray;
          border-width: 0 3px 3px 0;
        }
        &:last-child, &:first-child {
          &:hover {
            background-color: transparent;
            color: #4d4d4f;
            cursor: default;
          }
        }
      }
    }
  }
`;

const Pagination = (props:PaginationTypes) => {

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || ( paginationRange && paginationRange.length < 2)) {
    return null;
  }
  let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 1;

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <StyledPagination>

      <ul className={'pagination-container'}>
        <li
          className={`pagination-item ${currentPage === 1 ? ' disabled' : ''}`}
          onClick={onPrevious}
        >
          <div className="arrow-block">
          <i className="arrow left"></i><i className="arrow left"></i><i className="arrow left"></i></div>
        </li>
        {paginationRange ? paginationRange.map((pageNumber:number | string, index:number) => {
          if (pageNumber === DOTS) {
            return <li key={`dots-${index}`} className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li key={pageNumber}
              className={`pagination-item ${
                currentPage === pageNumber ? ' selected' : ''
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        }) : 1}
        <li
          className={`pagination-item ${
            currentPage === lastPage ? ' disabled' : ''
          }`}
          onClick={onNext}
        >
          <div className="arrow-block">
            <i className="arrow right"></i><i className="arrow right"></i><i className="arrow right"></i></div>
        </li>
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
