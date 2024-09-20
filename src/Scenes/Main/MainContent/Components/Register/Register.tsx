import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { columns, registers } from '../../../../../assets/mockData';
import Pagination from '../../../../../Components/Paginator';
import Table from './Table';
import {Rows} from "../../../../../types/types";

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
export interface RegisterProps {
  searchTerm: string;
}

const Register: React.FC<RegisterProps>  = ({ searchTerm}) => {
  const [countRegisters, setCountRegisters] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string >('');
  const [dataTable, setDataTable]=useState<Rows[]>([])
  const registersPerPage = 5;

  useEffect(() => {
    const fetchCountRegisters = () => {
      setLoading(true); // Set loading state to true
      setTimeout(() => {
        try {
          // Slice the data to show only the registers for the current page
          let response = registers; // Assume registers is your mock data

          // Apply search filter if searchTerm exists
          if (searchTerm) {
            response = response.filter(register =>
              register.class.toLowerCase().includes(searchTerm.toLowerCase()));
          }

          // Calculate start and end indices for pagination
          const startIndex = (currentPage - 1) * registersPerPage;
          const endIndex = Math.min(startIndex + registersPerPage, response.length);

          // Slice data for current page
          setDataTable(response.slice(startIndex, endIndex));
          setCountRegisters(response.length);
           // Update the countRegisters state with mock data
        } catch (err) {
          setError('Failed to fetch count.');
        } finally {
          setLoading(false); // Set loading state to false after "fetching"
        }
      }, 1000);
    };

      fetchCountRegisters();
    }, [searchTerm, currentPage]);

  const handlePageChange = (page: string | number) => {
    if (typeof page == 'number') {
      setCurrentPage(page);
    }
  };

  return (
    <RegisterStyle>
      <div className={'title-register'}>
        <h3>Реестры</h3>{' '}
      </div>
      <div className="table">
        <Table columns={columns} data={dataTable} loading={loading} error={error} className={'register'} />
        <div className={'pagination_wrapper'}>
          { dataTable.length === 5 ?
            (<Pagination
              currentPage={currentPage}
              totalCount={countRegisters}
              pageSize={registersPerPage}
              onPageChange={(page) => handlePageChange(page)}
            ></Pagination>)
           : null}
        </div>
      </div>
    </RegisterStyle>
  );
};

export default Register;
