import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 32px;
  background-color: ${({ theme, type }) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 12px;
  }
`;
