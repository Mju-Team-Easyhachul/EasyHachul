import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    }
    html, body {
        height: 100%;
    }
    #root {
        font-family: 'GmarketSansMedium';
        font-weight: normal;
        font-style: normal;
        height: 100%;
    }
    


`;

export default globalStyles;
