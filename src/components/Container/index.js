import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 40px);
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  svg {
  }
`;

export default Container;
