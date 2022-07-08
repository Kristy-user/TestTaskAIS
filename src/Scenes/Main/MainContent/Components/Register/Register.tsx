import React, { useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { columns, registers } from '../../../../../assets/mockData';
import Pagination from '../../../../../Components/Paginator';
import PaginatedItems from '../../../../../Components/Paginator';
import Table from './Table';

const RegisterStyle = styled.div`
  margin-top: 150px;

  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 1.4px;
    margin-bottom: 28px;
  }
  .table {
    position: relative;
    margin-bottom: 220px;
  }
  .pagination_wrapper {
    align-self: center;
    position: absolute;
    bottom: -55px;
    left: 31%;
  }
`;

const Register = () => {
  const [countRegisters, setCountRegisters] = useState(113);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <RegisterStyle>
      <div className={'title-register'}>
        <h3>Реестры</h3>{' '}
      </div>
      <div className="table">
        <Table columns={columns} data={registers} className={'register'} />
        <div className={'pagination_wrapper'}>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={countRegisters}
            pageSize={10}
            onPageChange={(page) => setCurrentPage(page)}
          ></Pagination>
        </div>
      </div>
    </RegisterStyle>
  );
};

export default Register;
