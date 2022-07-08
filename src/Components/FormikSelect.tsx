import React from 'react';
import { Formik, useField } from 'formik';
import styled from 'styled-components';
import { usePreviousProps } from '@mui/utils';

const SelectWrapper = styled.div`
  min-width: 100%;
  & .label {
    margin: 0;
    text-align: left;
    color: #676a71;
  }
  & select {
    min-width: 100%;
    background: #f6f6f9;
    border-radius: 5px;
    color: #231f20;
    display: block;
    margin-bottom: 28px;
    padding: 17px 18px;
    margin-left: 0;
    border: 1px solid #f6f6f9;
    & option::placeholder {
      color: #c6c6c6;
    }
    &:focus,
    :hover {
      outline: none;
      border: 1px solid #009cb4;
    }
  }
`;

interface FormikSelectProps {
  name: string;

  label: string;
  options: Array<string>;
}

const FormikSelect: React.FC<FormikSelectProps> = (props) => {
  const [field, meta, helpers] = useField(props);
  let className = [];
  let labelClass = [];
  if (meta.error && meta.touched) {
    className.push('errorInput');
    labelClass.push('red');
  }
  if (props.name === 'password') {
    className.push('passwordInput');
  }

  return (
    <SelectWrapper>
      <label className={'label'} htmlFor="countries">
        {props.label}
      </label>
      <select
        name="countries"
        onChange={(e) => helpers.setValue(e.target.value)}
        onBlur={field.onBlur}
        value={field.value}
      >
        {props.options.map((item, i) => (
          <option key={i} value={item} label={item}>
            {item}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className={'error'}>{meta.error}</div>
      ) : null}
    </SelectWrapper>
  );
};

export default FormikSelect;
