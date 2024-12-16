import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  font-size: 16px;
  width: 250px;
  height: 20px;
  margin-bottom: 15px;
  padding: 5px;
  border: 2px solid var(--second-brand-background-color);
  border-radius: 5px;
  font-weight: 700;
  &:hover {
    border: 2px solid var(--first-brand-color);
  }
`;

export const FilterLabel = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--first-brand-color);
`;
