import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  margin: 20px 0px;
  display: flex;
  min-width: 420px;
  align-items: center;
  flex-direction: column;
  background-color: var(--first-brand-background-color);
  border: 2px solid var(--second-brand-color);
  border-radius: 8px;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.5);
`;

export const InputEl = styled(Field)`
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border: 2px solid var(--second-brand-color);
  border-radius: 8px;
  font-weight: 700;
  &:hover {
    border: 2px solid var(--first-brand-color);
  }
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--label-color);
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: var(--second-brand-background-color);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    border: 2px solid var(--first-brand-color);
    box-shadow: -6px 16px 11px -9px rgba(31, 25, 25, 0.75);
  }
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: var(--error-color);
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
`;
