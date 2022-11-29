import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
}
`;

export default Global;