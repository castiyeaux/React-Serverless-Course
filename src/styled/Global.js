import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'IBM Plex Sans';
        src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    }

    * {
        box-sizing: border-box;
        color: #333;
        margin: 0;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 300;
    }

    h1, h2 {
        margin-bottom: 2rem;
    }
`;