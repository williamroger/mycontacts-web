import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  strong {
    display: block;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.danger.main};
    margin-bottom: 8px;
  }
`;
