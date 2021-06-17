import styled from 'styled-components'

export const PrincipalContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 500px;
    margin: 0 auto;
    margin-top: 200px;

    input {
      margin: 2px 0;
      padding: 3px;
    }

    button {
      padding: 4px;
      background: gray21;
      color: #363636;
      border: none;
      cursor: pointer;
    }

    button + button {
      margin-top: 5px;
    }

    input, button {
      border-radius: 8px;
      font-size: 20px;
    }

    button:hover {
      transform: scale(1.1);
    }
  }
`
