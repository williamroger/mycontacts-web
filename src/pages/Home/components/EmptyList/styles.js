import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  p {
    color: ${({ theme }) => theme.colors.gray['200']};
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
