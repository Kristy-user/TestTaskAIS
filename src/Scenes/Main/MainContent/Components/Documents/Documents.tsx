import React, { useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { documents } from 'assets/mockData';
import Table from '../Register/Table';
import { documentsTitle } from '../../../../../assets/mockData';

const DocumentsStyle = styled.div`
  margin: 120px auto;
  .title-documents {
    & > h3 {
      font-weight: 700;
      font-size: 36px;
      line-height: 49px;
      letter-spacing: 1.4px;
    }
    & > span {
      color: #009cb4;
    }
    & p {
      margin-top: 10px;
    }
  }
  & .documents {
    margin-top: 38px;
    margin-left: 0;

    & .title-table {
      text-align: left;

      & th {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #009cb4;
        padding: 30px;
        padding-right: 120px;

        &:last-child {
          padding-right: 0px;
        }
        /* &:first-child {
          padding-right: 100px;
        } */
      }
    }
    & td {
      padding: 20px;
      padding-left: 0;
    }
  }
`;

const Documents = () => {
  return (
    <DocumentsStyle>
      <div className={'title-documents'}>
        <h3>Документы</h3>
        <p>
          Всего документов <span>{documents.length}</span>
        </p>
      </div>
      <div className="table">
        <Table
          columns={documentsTitle}
          data={documents}
          className={'documents'}
        />
      </div>
    </DocumentsStyle>
  );
};

export default Documents;
