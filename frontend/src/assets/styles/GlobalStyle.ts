import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'ONE-Mobile-Title';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Title.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    @font-face {
    font-family: 'ONE-Mobile-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    *,
    html,
    body,
    #root {
        width: auto;
        margin: 0;

        ul, li {
            list-style: none;
            padding: 0;
            margin: 0 auto;
        }

        input {
            font-family: 'ONE-Mobile-Regular';
        }
        input[type=password] {
            font-family: sans-serif;
        }
    }
`;

Object.freeze(GlobalStyle);
export default GlobalStyle;
