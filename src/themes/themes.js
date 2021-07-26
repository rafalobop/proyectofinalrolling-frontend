import { createGlobalStyle } from 'styled-components';
export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
  nav: '#084298',
  btn: '#084298',
};

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
  nav: '#555',
  btn: '#555',
};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body}
    }
    nav{
        background-color: ${(props) => props.theme.nav}
    }
    .add-materia-button{
      background-color: ${(props) => props.theme.btn}
    }
`;
