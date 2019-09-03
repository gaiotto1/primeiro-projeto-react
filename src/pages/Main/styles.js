import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 23px;
  color: ${props => (props.error ? 'red' : 'blue')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 16px;
    color: #333;
  }
`;
