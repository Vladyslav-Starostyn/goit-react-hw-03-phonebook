import styled from 'styled-components';

export const ContactListEl = styled.ul`
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 6px;
  text-align: center;
  border-radius: 8px;
  background-color: var(--first-brand-background-color);
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.5);
`;
