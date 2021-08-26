import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

    ${reset}

    * {
        /* box-sizing: border-box; */
        font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
    }
`;

export default GlobalStyle;
